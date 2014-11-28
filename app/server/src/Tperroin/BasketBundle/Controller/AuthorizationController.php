<?php
/**
 * Created by PhpStorm.
 * User: Thibault
 * Date: 26/10/2014
 * Time: 22:08
 */

namespace Tperroin\BasketBundle\Controller;


use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\UserBundle\Mailer\Mailer;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Tperroin\BasketBundle\Entity\User\User;


class AuthorizationController extends FOSRestController
{

    /**
     * @ApiDoc()
     */
    public function getUserAction($username)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository('Tperroin\BasketBundle\Entity\User\User')->findOneByUsername($username);

        $view = View::create()
            ->setStatusCode(200)
            ->setData($user);

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    /**
     * @ApiDoc()
     */
    public function getUsersAction()
    {
        $em = $this->getDoctrine()->getManager();

        $users = $em->getRepository('Tperroin\BasketBundle\Entity\User\User')->findAll();

        $view = View::create()
            ->setStatusCode(200)
            ->setData($users);

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    /**
     * @ApiDoc()
     */
    public function postUserAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $parameters = $request->request->all();

        $user = new User();
        $user->setUsername($parameters["username"]);
        $user->setEmail($parameters["mail"]);
        $user->setPlainPassword($parameters["password"]);
        //Envoyer un mail de confirmation
        $user->setEnabled(false);
        $user->setFirstname($parameters["firstname"]);
        $user->setLastname($parameters["lastname"]);

        $tokenGenerator = $this->get('fos_user.util.token_generator');
        $token = $tokenGenerator->generateToken();

        $user->setConfirmationToken($token);

        $em->persist($user);
        $em->flush();

        $this->get('fos_user.mailer')->sendConfirmationEmailMessage($user);

        $view = View::create()
            ->setStatusCode(200)
            ->setData($user);

        return $this->get('fos_rest.view_handler')->handle($view);
    }

    /**
     * @ApiDoc()
     */
    public function postUserConfirmAction(Request $request)
    {
        /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
        $userManager = $this->get('fos_user.user_manager');

        $parameters = $request->request->all();

        $token = $parameters["token"];

        $user = $userManager->findUserByConfirmationToken($token);

        if (null === $user) {
            $result = array("message" => "L'utilisateur avec le token " . $token . " n'existe pas.");
            $view = View::create()
                ->setStatusCode(404)
                ->setData($result);
        } else {
            $user->setConfirmationToken(null);
            $user->setEnabled(true);

            $userManager->updateUser($user);

            $view = View::create()
                ->setStatusCode(200)
                ->setData($user);
        }

        return $this->get('fos_rest.view_handler')->handle($view);
    }

} 
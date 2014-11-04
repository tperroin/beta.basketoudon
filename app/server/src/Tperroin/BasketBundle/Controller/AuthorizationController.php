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
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Tperroin\BasketBundle\Entity\User\User;


class AuthorizationController extends FOSRestController {

    /**
     * @ApiDoc()
     */
    public function getUserAction($username)
    {
        $em  =$this->getDoctrine()->getManager();
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

} 
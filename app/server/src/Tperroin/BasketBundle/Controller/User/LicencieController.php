<?php
/**
 * Created by PhpStorm.
 * User: Thibault
 * Date: 17/11/2014
 * Time: 20:07
 */

namespace Tperroin\BasketBundle\Controller\User;

use FOS\RestBundle\View\View;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class LicencieController extends Controller
{

    /**
     * @ApiDoc()
     */
    public function optionsLicenciesAction()
    {
    } // "options_licencies" [OPTIONS] /licencies

    /**
     * @ApiDoc()
     */
    public function getLicenciesAction()
    {

        $em = $this->getDoctrine()->getManager();

        $news = $em->getRepository('TperroinBasketBundle:User\Licencie')->getLicenciesForSignUp();

        $view = View::create()
            ->setStatusCode(200)
            ->setData($news);

        return $this->get('fos_rest.view_handler')->handle($view);

    } // "get_licencies"     [GET] /licencies

    /**
     * @ApiDoc()
     */
    public function postLicencieAction(Request $request)
    {

    } // "licencie"    [POST] /licencie

    /**
     * @ApiDoc()
     */
    public function patchLicenciesAction()
    {
    } // "patch_licencies"   [PATCH] /licencies

    /**
     * @ApiDoc()
     */
    public function getLicencieAction($slug)
    {
        $em = $this->getDoctrine()->getManager();

        $news = $em->getRepository('TperroinBasketBundle:User\Licencie')->getLicencieFromConcat($slug);

        $view = View::create()
            ->setStatusCode(200)
            ->setData($news);

        return $this->get('fos_rest.view_handler')->handle($view);
    } // "get_licencie"      [GET] /licencie/{slug}

    /**
     * @ApiDoc()
     */
    public function editLicencieAction($slug)
    {
    } // "edit_licencie"     [GET] /licencie/{slug}/edit

    /**
     * @ApiDoc()
     */
    public function puLicencieAction($slug)
    {
    } // "put_licencie"      [PUT] /licencie/{slug}

    /**
     * @ApiDoc()
     */
    public function patchLicencieAction($slug)
    {
    } // "patch_licencie"    [PATCH] /licencie/{slug}

    /**
     * @ApiDoc()
     */
    public function deleteLicencieAction($slug)
    {
    } // "delete_licencie"    [PATCH] /licencie/{slug}

}

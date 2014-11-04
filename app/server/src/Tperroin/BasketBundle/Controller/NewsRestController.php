<?php
/**
 * Created by PhpStorm.
 * User: Thibault
 * Date: 25/10/2014
 * Time: 17:42
 */

namespace Tperroin\BasketBundle\Controller;

use FOS\RestBundle\View\View;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Tperroin\BasketBundle\Entity\News;

/**
 * Class NewsRestController
 * @package Tperroin\BasketBundle\Controller
 */
class NewsRestController extends Controller
{

    /**
     * @ApiDoc()
     */
    public function optionsNewsAction()
    {
    } // "options_news" [OPTIONS] /news

    /**
     * @ApiDoc()
     */
    public function getNewsAction()
    {

        $em = $this->getDoctrine()->getManager();

        $news = $em->getRepository('TperroinBasketBundle:News')->findAll();

        $view = View::create()
            ->setStatusCode(200)
            ->setData($news);

        return $this->get('fos_rest.view_handler')->handle($view);

    } // "get_news"     [GET] /news

    /**
     * @ApiDoc()
     */
    public function postNewsAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        $news = new News();

    } // "news"    [POST] /news

    /**
     * @ApiDoc()
     */
    public function patchNewsAction()
    {
    } // "news"   [PATCH] /news

    /**
     * @ApiDoc()
     */
    public function getNewAction($slug)
    {
    } // "get_new"      [GET] /news/{slug}

    /**
     * @ApiDoc()
     */
    public function editNewAction($slug)
    {
    } // "edit_new"     [GET] /news/{slug}/edit

    /**
     * @ApiDoc()
     */
    public function putNewAction($slug)
    {
    } // "put_new"      [PUT] /news/{slug}

    /**
     * @ApiDoc()
     */
    public function patchNewAction($slug)
    {
    } // "patch_new"    [PATCH] /news/{slug}

    /**
     * @ApiDoc()
     */
    public function deleteNewAction($slug)
    {
    } // "delete_new"    [PATCH] /news/{slug}

} 
<?php
/**
 * Created by PhpStorm.
 * User: Thibault
 * Date: 28/11/2014
 * Time: 14:30
 */

namespace Tperroin\BasketBundle\Controller\Events;

use FOS\RestBundle\View\View;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Tperroin\BasketBundle\Entity\News;

class EventGet extends Controller {

    /**
     * @ApiDoc()
     */
    public function getEventsAction()
    {

        $em = $this->getDoctrine()->getManager();

        $news = $em->getRepository('TperroinBasketBundle:Events\Event')->findAll();

        $view = View::create()
            ->setStatusCode(200)
            ->setData($news);

        return $this->get('fos_rest.view_handler')->handle($view);

    } // "get_events"     [GET] /events

    /**
     * @ApiDoc()
     */
    public function getEventAction($slug)
    {
    } // "get_event"      [GET] /event/{slug}

} 
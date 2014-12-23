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

class Event extends Controller {

    /**
     * @ApiDoc()
     */
    public function optionsEventsAction()
    {
    } // "options_events" [OPTIONS] /events

    /**
     * @ApiDoc()
     */
    public function postEventAction(Request $request)
    {

    } // "event"    [POST] /event

    /**
     * @ApiDoc()
     */
    public function patchEventsAction()
    {
    } // "events"   [PATCH] /events

    /**
     * @ApiDoc()
     */
    public function editEventAction($slug)
    {
    } // "edit_event"     [GET] /event/{slug}/edit

    /**
     * @ApiDoc()
     */
    public function putEventAction($slug)
    {
    } // "put_event"      [PUT] /event/{slug}

    /**
     * @ApiDoc()
     */
    public function patchEventAction($slug)
    {
    } // "patch_event"    [PATCH] /event/{slug}

    /**
     * @ApiDoc()
     */
    public function deleteEventAction($slug)
    {
    } // "delete_event"    [PATCH] /event/{slug}

} 
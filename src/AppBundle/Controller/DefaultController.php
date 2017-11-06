<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'expanded' => false,
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
    /**
     * @Route("/home", name="homeExpanded")
     */
    public function homeExpandedAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'expanded' => true,
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
    /**
     * @Route("/editorial", name="editorial")
     */
    public function editorialAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/editorial.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
    /**
     * @Route("/museos", name="museos")
     */
    public function museosAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/museos.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
    /**
     * @Route("/paleontologia", name="dino")
     */
    public function dinoAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/paleontologia.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
    /**
     * @Route("/circuitos", name="circuitos")
     */
    public function circuitosAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/circuitos.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
    
    /**
     * @Route("/biblioteca", name="biblioteca")
     */
    public function bibliotecaAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/biblioteca.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
    
    
    /**
     * @Route("/paleontologia/dino", name="paleo01")
     */
    public function paleo01Action(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('obras/dino.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/obras/la-mano-de-dios", name="obra01")
     */
    public function obra01Action(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('obras/lamano.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/obras/la-vuelta-del-malon", name="obras02")
     */
    public function obra02Action(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('obras/elmalon.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }


}

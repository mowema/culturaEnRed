<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Page
 *
 * @ORM\Entity
 * @ORM\Table(name="page")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\PageRepository")
 */
class Page
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var guid
     *
     * @ORM\Column(name="guid", type="guid")
     */
    private $guid;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

    /**
     * @var float
     *
     * @ORM\Column(name="fl_oat", type="float")
     */
    private $flOat;

    /**
     * @var string
     *
     * @ORM\Column(name="plata", type="decimal", precision=2, scale=2)
     */
    private $plata;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set guid
     *
     * @param guid $guid
     *
     * @return Page
     */
    public function setGuid($guid)
    {
        $this->guid = $guid;

        return $this;
    }

    /**
     * Get guid
     *
     * @return guid
     */
    public function getGuid()
    {
        return $this->guid;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Page
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Page
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set flOat
     *
     * @param float $flOat
     *
     * @return Page
     */
    public function setFlOat($flOat)
    {
        $this->flOat = $flOat;

        return $this;
    }

    /**
     * Get flOat
     *
     * @return float
     */
    public function getFlOat()
    {
        return $this->flOat;
    }

    /**
     * Set plata
     *
     * @param string $plata
     *
     * @return Page
     */
    public function setPlata($plata)
    {
        $this->plata = $plata;

        return $this;
    }

    /**
     * Get plata
     *
     * @return string
     */
    public function getPlata()
    {
        return $this->plata;
    }
}


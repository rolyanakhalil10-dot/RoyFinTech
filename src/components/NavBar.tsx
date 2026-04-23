import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

type NavItem = "Home" | "About" | "Features" | "Pricing";


export default function NavBar() {
  const [active, setActive] = useState<NavItem>("Home");
  const navigate = useNavigate();
  return (
    <Navbar
      fluid
      rounded
      className="sticky top-0 z-50 bg-white dark:bg-gray-900"
    >
      <NavbarBrand href="#hero">
        <img src="/asset.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          RoyFinTech
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button
          className="bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg"
          onClick={() => navigate("/login")}
        >
          Get started
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink
          href="#"
          active={active === "Home"}
          onClick={() => setActive("Home")}
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="#"
          active={active === "About"}
          onClick={() => setActive("About")}
        >
          About
        </NavbarLink>
        <NavbarLink
          href="#features"
          active={active === "Features"}
          onClick={() => setActive("Features")}
        >
          Features
        </NavbarLink>
        <NavbarLink
          href="#pricing"
          active={active === "Pricing"}
          onClick={() => setActive("Pricing")}
        >
          Pricing
        </NavbarLink>
        <NavbarLink href="#hero">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

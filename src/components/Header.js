"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <h1>VoWords</h1>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;

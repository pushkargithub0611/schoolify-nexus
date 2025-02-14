
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Primary Navigation */}
      <div className="bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">
              SamarthX
            </div>

            {/* Primary Nav Items */}
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary-light transition-colors">Parents & Students</a>
              <a href="#" className="hover:text-primary-light transition-colors">Support</a>
              <button className="flex items-center hover:text-primary-light transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <a href="#" className="hover:text-primary-light transition-colors">Login</a>
              <Button className="bg-primary hover:bg-primary-light text-white px-6">
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-neutral-700 hover:text-primary">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] bg-[#1A1F2C] text-white">
                    <div className="grid gap-3">
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Student Information System</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Learning Management</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Assessment Management</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-neutral-700 hover:text-primary">Solve a Need</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] bg-[#1A1F2C] text-white">
                    <div className="grid gap-3">
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Enrollment</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Communication</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Data Management</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-neutral-700 hover:text-primary">Support a Role</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] bg-[#1A1F2C] text-white">
                    <div className="grid gap-3">
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Teachers</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Administrators</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">IT Staff</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-neutral-700 hover:text-primary">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] bg-[#1A1F2C] text-white">
                    <div className="grid gap-3">
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Blog</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Case Studies</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Webinars</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-neutral-700 hover:text-primary">Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] bg-[#1A1F2C] text-white">
                    <div className="grid gap-3">
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">About Us</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Careers</NavigationMenuLink>
                      <NavigationMenuLink href="#" className="hover:bg-[#2A2F3C] px-3 py-2 rounded-md transition-colors">Contact</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

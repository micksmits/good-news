import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Newspaper } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <NavigationMenu className="p-3">
      <NavigationMenuList className="w-full">
        <NavigationMenuItem className="mr-auto">
          <NavigationMenuLink
            render={
              <Link href="/">
                <Newspaper className="text-primary" />
              </Link>
            }
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={<Link href="/hn">Hacker News</Link>} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/Blabbermouth">Blabbermouth</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

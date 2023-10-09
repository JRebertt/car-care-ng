import { ModeToggle } from "./DarkMode/mode-toggle";
import { MainNav } from "./MenuNav/main-nav";
import { Search } from "./MenuNav/search";
import { TeamSwitcher } from "./MenuNav/team-switcher";
import { UserNav } from "./MenuNav/user-nav";

export function Header() {
  return (
    <nav>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
    </nav>
  );
}

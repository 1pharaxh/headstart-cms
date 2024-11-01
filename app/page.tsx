import AuthComponent from "@/components/auth-component";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="w-full h-full p-20 flex items-center justify-center flex-col gap-11">
      <ThemeSwitcher />
      <AuthComponent />
    </main>
  );
}

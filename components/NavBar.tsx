import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const NavBar = () => {
  return (
    <Card className="bg-foreground rounded-none border-none flex items-center justify-between p-5">
      <h1 className="text-background font-bold text-lg">ExpenseEase</h1>
      <Avatar>
        <AvatarImage src="https://github.com/viditagrawal56.png" />
        <AvatarFallback>VA</AvatarFallback>
      </Avatar>
    </Card>
  );
};

export default NavBar;

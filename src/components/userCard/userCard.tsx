import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"


const UserCard = (user:any) => {
    const userencap = user.user
    return (
      <div>
        <Card className="border-0">
          <CardContent className="p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="ml-10">
                  <Avatar className="size-7">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-2">{userencap.nome}</div>
              </div>
              <div className="mr-10">
                <Button className="h-6 bg-[#64BCED]">Editar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

export default UserCard
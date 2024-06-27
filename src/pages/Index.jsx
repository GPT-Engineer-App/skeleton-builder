import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Welcome to Your App</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-center">This is a bare-bones application. Start building your features here.</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Get Started</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to begin your journey!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
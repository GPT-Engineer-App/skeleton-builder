import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
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
      <footer className="w-full bg-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Your Company. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/about" className="text-sm text-blue-600 hover:underline">About</a>
          <a href="/contact" className="text-sm text-blue-600 hover:underline">Contact</a>
          <a href="/privacy" className="text-sm text-blue-600 hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { GameProvider } from "@/context/GameContext";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
function NotFoundComponent(){return <div className="error-page"><strong>404</strong><h1>That challenge slipped away.</h1><p>Return to the arena and choose another path.</p><Button asChild><Link to="/">Back to dashboard</Link></Button></div>}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"})},[error]);return <div className="error-page"><h1>This page didn’t load.</h1><p>Give it another try or return to your dashboard.</p><div className="flex gap-3"><Button onClick={()=>{router.invalidate();reset()}}>Try again</Button><Button asChild variant="outline"><Link to="/">Go home</Link></Button></div></div>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"theme-color",content:"#111433"},{name:"author",content:"THE MASTER"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap"},{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><GameProvider><AppShell><Outlet/></AppShell></GameProvider></QueryClientProvider>}

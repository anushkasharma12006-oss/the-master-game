import { createFileRoute, notFound } from "@tanstack/react-router";
import { GameEngine } from "@/components/game/GameEngine";
import { modeMeta, type GameMode } from "@/data/questions";
const modes: GameMode[]=["master","rapid","brain","science"];
export const Route=createFileRoute("/games/$mode")({beforeLoad:({params})=>{if(!modes.includes(params.mode as GameMode))throw notFound()},head:({params})=>{const item=modeMeta[params.mode as GameMode];return {meta:[{title:`${item?.name??"Game"} — THE MASTER`},{name:"description",content:item?.description??"Play a knowledge challenge."},{property:"og:title",content:`${item?.name??"Game"} — THE MASTER`},{property:"og:description",content:item?.description??"Play a knowledge challenge."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}},component:GameRoute});
function GameRoute(){const {mode}=Route.useParams();return <GameEngine mode={mode as GameMode}/>}

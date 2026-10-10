import React, {useState,useRef,useEffect,useCallback} from 'react';
import {createRoot} from 'react-dom/client';
import {ThreeOpalViewer,ThreeOpalViewerRef} from './ThreeOpalViewer';
import './style.css';
const initial={azimuth:30,elevation:Math.atan2(280,240)*180/Math.PI,intensity:100,ambient:10};
const maps={flash:'/models/Matrixtwin_opal_flash_smooth.png',domain:'/models/Matrixtwin_opal_domain_smooth.png'};
function App(){
 const viewer=useRef<ThreeOpalViewerRef>(null);
 const [light,setLight]=useState(initial),[enabled,setEnabled]=useState(true),[mode,setMode]=useState<'camera'|'fixed'>('camera'),[background,setBackground]=useState('dark'),[status,setStatus]=useState('loading');
 const ready=useCallback(()=>setStatus('ready'),[]),failed=useCallback(()=>setStatus('error'),[]);
 const reset=()=>{setLight(initial);setEnabled(true);setMode('camera');setBackground('dark');viewer.current?.resetView();};
 const snapshot=useRef({light,enabled,mode,background,status});snapshot.current={light,enabled,mode,background,status};
 useEffect(()=>{const context=(document as any).modelContext;if(!context?.registerTool)return;const life=new AbortController();
 const tool={name:'configure_opal_lamp',description:'Set the visible opal light-box lamp direction, brightness, and fill light.',inputSchema:{type:'object',properties:{azimuth:{type:'number',minimum:-180,maximum:180},elevation:{type:'number',minimum:-20,maximum:90},intensity:{type:'number',minimum:0,maximum:150},ambient:{type:'number',minimum:0,maximum:50}},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},async execute(input:any){if(!input||typeof input!=='object'||Array.isArray(input))throw new Error('Expected lamp settings');const ranges:any={azimuth:[-180,180],elevation:[-20,90],intensity:[0,150],ambient:[0,50]};for(const [k,v] of Object.entries(input)){if(!ranges[k]||typeof v!=='number'||!Number.isFinite(v)||v<ranges[k][0]||v>ranges[k][1])throw new Error('Invalid lamp setting: '+k);}setLight(p=>({...p,...input}));await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));return snapshot.current;}};
 try{Promise.resolve(context.registerTool(tool,{signal:life.signal})).catch(()=>{});}catch{}return ()=>life.abort();},[]);
 function range(key:keyof typeof light,label:string,min:number,max:number,unit:string){return <label className="slider"><span>{label}<output>{Math.round(light[key])}{unit}</output></span><input type="range" min={min} max={max} step={1} value={light[key]} onChange={e=>setLight(p=>({...p,[key]:+e.target.value}))}/></label>}
 return <main><header><div className="brand"><span className="brandmark">◈</span><h1>Opal light box</h1></div><span className="specimen">Original scan · 01</span></header><div className="workspace"><section className={'stage '+background} aria-label="Opal viewing chamber">
 <ThreeOpalViewer ref={viewer} modelUrl="/models/Matrixtwin_opal.glb" opticalMaps={maps} lighting={{...light,intensity:enabled?light.intensity:0}} lampMode={mode} showInstruments={false} proceduralFallback={false} fitWidth onReady={ready} onLoadError={failed}/>
 {status!=='ready'&&<div className="status" role="status">{status==='loading'?<><span className="spinner"/>Loading your opal…</>:<>The scan couldn’t be displayed.<button onClick={()=>location.reload()}>Try again</button></>}</div>}
 <div className="stage-top"><span>Viewing chamber</span><button onClick={()=>viewer.current?.resetView()} aria-label="Reset camera view">Reset view</button></div><div className="stage-bottom"><span>Drag to rotate · Pinch to zoom</span><span>{enabled&&light.intensity>0?'Lamp on':'Lamp off'}</span></div>
 </section><aside><div className="panel-heading"><h2>Light</h2><label className="toggle"><input type="checkbox" checked={enabled} onChange={e=>setEnabled(e.target.checked)}/><span>On</span></label></div>
 {range('azimuth','Around the stone',-180,180,'°')}{range('elevation','Lamp height',-20,90,'°')}{range('intensity','Brightness',0,150,'%')}{range('ambient','Fill light',0,50,'%')}
 <label className="select-label">Lamp position<select value={mode} onChange={e=>setMode(e.target.value as any)}><option value="camera">Moves with the view</option><option value="fixed">Stays in the light box</option></select></label>
 <div className="divider"/><h2>Background</h2><div className="swatches" role="group" aria-label="Background colour">{[['dark','Dark'],['gray','Grey'],['white','White']].map(([value,label])=><button key={value} className={'swatch '+value+(background===value?' selected':'')} aria-pressed={background===value} onClick={()=>setBackground(value)}>{label}</button>)}</div>
 <button className="reset" onClick={reset}>Reset light box</button><p className="note">One lamp. Your original stone.<br/>Move the light to explore the green and blue flash.</p><p className="small-note">Visual lighting study</p>
 </aside></div></main>
}
createRoot(document.getElementById('root')!).render(<App/>);

// spectrum-icons.jsx — illustrated example icons for each spectrum region
// Exports EXAMPLE_ICONS to window for use by the main app

const SvgIcon = ({color, children}) => (
  <svg viewBox="0 0 44 44" fill="none" stroke={color} strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round"
       style={{width:'100%',height:'100%'}}>
    {children}
  </svg>
);

const d2r = Math.PI / 180;
const pt = (cx,cy,r,a) => [+(cx + r*Math.cos(a*d2r)).toFixed(2), +(cy + r*Math.sin(a*d2r)).toFixed(2)];

/* ═══════════════════════════════════════════════════════════════
   GAMMA RAYS
═══════════════════════════════════════════════════════════════ */

function IconNuclear({color}) {
  const [cx,cy,ri,ro] = [22,22,6.5,13.5];
  const blades = [-90, 30, 150];
  const hs = 30;
  function bladePath(a) {
    const [xi0,yi0] = pt(cx,cy,ri,a-hs);
    const [xo0,yo0] = pt(cx,cy,ro,a-hs);
    const [xo1,yo1] = pt(cx,cy,ro,a+hs);
    const [xi1,yi1] = pt(cx,cy,ri,a+hs);
    return `M${xi0},${yi0} L${xo0},${yo0} A${ro},${ro} 0 0,1 ${xo1},${yo1} L${xi1},${yi1} A${ri},${ri} 0 0,0 ${xi0},${yi0}Z`;
  }
  return (
    <SvgIcon color={color}>
      {blades.map((a,i) => <path key={i} d={bladePath(a)} fill={color} fillOpacity="0.55" stroke="none"/>)}
      <circle cx={cx} cy={cy} r="4" fill={color} fillOpacity="0.8" stroke="none"/>
      <circle cx={cx} cy={cy} r="17" stroke={color} strokeWidth="1.2" strokeOpacity="0.2" fill="none"/>
    </SvgIcon>
  );
}

function IconBurst({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="22" r="5"/>
      {[0,45,90,135,180,225,270,315].map((d,i) => {
        const [x1,y1]=pt(22,22,8,d), [x2,y2]=pt(22,22,17,d);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
      })}
      {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((d,i) => {
        const [x1,y1]=pt(22,22,8,d), [x2,y2]=pt(22,22,12.5,d);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.4"/>;
      })}
    </SvgIcon>
  );
}

function IconTarget({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="22" r="4.5"/>
      <circle cx="22" cy="22" r="10"/>
      <circle cx="22" cy="22" r="15.5"/>
      <line x1="22" y1="2" x2="22" y2="16"/>
      <line x1="22" y1="28" x2="22" y2="42"/>
      <line x1="2" y1="22" x2="16" y2="22"/>
      <line x1="28" y1="22" x2="42" y2="22"/>
    </SvgIcon>
  );
}

function IconAtom({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="22" r="3.5" fill={color} fillOpacity="0.8" stroke="none"/>
      <ellipse cx="22" cy="22" rx="17" ry="7"/>
      <ellipse cx="22" cy="22" rx="17" ry="7" transform="rotate(60,22,22)"/>
      <ellipse cx="22" cy="22" rx="17" ry="7" transform="rotate(-60,22,22)"/>
      {/* electrons */}
      <circle cx="39" cy="22" r="2" fill={color} fillOpacity="0.7" stroke="none"/>
      <circle cx="13.5" cy="8" r="2" fill={color} fillOpacity="0.7" stroke="none"/>
      <circle cx="13.5" cy="36" r="2" fill={color} fillOpacity="0.7" stroke="none"/>
    </SvgIcon>
  );
}

function IconSupernova({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="22" r="3.5" fill={color} fillOpacity="0.85" stroke="none"/>
      <circle cx="22" cy="22" r="9" strokeDasharray="2.5,2"/>
      <circle cx="22" cy="22" r="15" strokeDasharray="3,2.5" strokeOpacity="0.65"/>
      <circle cx="22" cy="22" r="20" strokeDasharray="4,3" strokeOpacity="0.35"/>
      {[0,90,180,270].map(d => {
        const [x1,y1]=pt(22,22,4.5,d), [x2,y2]=pt(22,22,7,d);
        return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2}/>;
      })}
    </SvgIcon>
  );
}

/* ═══════════════════════════════════════════════════════════════
   X-RAYS
═══════════════════════════════════════════════════════════════ */

function IconHand({color}) {
  return (
    <SvgIcon color={color}>
      {/* 4 finger bones */}
      <line x1="12" y1="26" x2="12" y2="9"/>
      <line x1="18" y1="26" x2="18" y2="7"/>
      <line x1="24" y1="26" x2="24" y2="7"/>
      <line x1="30" y1="26" x2="30" y2="10"/>
      {/* knuckle joints */}
      {[[12,15],[18,13],[24,13],[30,15]].map(([x,y],i) => (
        <circle key={`a${i}`} cx={x} cy={y} r="1.5" fill={color} fillOpacity="0.75" stroke="none"/>
      ))}
      {[[12,21],[18,19],[24,19],[30,21]].map(([x,y],i) => (
        <circle key={`b${i}`} cx={x} cy={y} r="1.5" fill={color} fillOpacity="0.75" stroke="none"/>
      ))}
      {/* palm */}
      <path d="M9,26 Q21,30 33,26 L33,36 Q21,39 9,36 Z"/>
      {/* thumb */}
      <line x1="9" y1="28" x2="5" y2="20"/>
      <circle cx="5" cy="20" r="1.3" fill={color} fillOpacity="0.7" stroke="none"/>
    </SvgIcon>
  );
}

function IconSuitcase({color}) {
  return (
    <SvgIcon color={color}>
      {/* body */}
      <rect x="5" y="13" width="34" height="24" rx="3"/>
      {/* handle */}
      <path d="M14,13 V9 Q22,6 30,9 V13"/>
      {/* scan line */}
      <line x1="5" y1="25" x2="39" y2="25" strokeDasharray="5,3" strokeOpacity="0.5"/>
      {/* X-ray contents */}
      <ellipse cx="15" cy="24" rx="4" ry="7" strokeOpacity="0.6"/>
      <line x1="27" y1="16" x2="28" y2="35" strokeOpacity="0.6"/>
      <circle cx="31" cy="23" r="4" strokeOpacity="0.6"/>
    </SvgIcon>
  );
}

function IconTooth({color}) {
  return (
    <SvgIcon color={color}>
      {/* crown */}
      <path d="M13,22 Q12,8 22,7 Q32,8 31,22"/>
      <line x1="13" y1="22" x2="31" y2="22"/>
      {/* roots */}
      <path d="M15,22 Q14,33 13,40"/>
      <line x1="22" y1="22" x2="22" y2="39"/>
      <path d="M29,22 Q30,33 31,40"/>
      {/* enamel line */}
      <path d="M16,16 Q22,13 28,16" strokeDasharray="2,2" strokeOpacity="0.45"/>
    </SvgIcon>
  );
}

function IconCTScan({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="22" r="17.5"/>
      <circle cx="22" cy="22" r="11" strokeDasharray="3,2" strokeOpacity="0.6"/>
      <circle cx="22" cy="22" r="5.5"/>
      {/* scan sweep */}
      <line x1="22" y1="22" x2="39.5" y2="22" strokeOpacity="0.75"/>
      <line x1="22" y1="22" x2="35" y2="9.5" strokeOpacity="0.4"/>
      <path d="M39.5,22 A17.5,17.5 0 0,0 35,9.5" strokeOpacity="0.5"/>
    </SvgIcon>
  );
}

function IconLattice({color}) {
  const dots = [];
  for(let r=0;r<4;r++) for(let c=0;c<4;c++) dots.push([8+c*9, 8+r*9]);
  return (
    <SvgIcon color={color}>
      {[0,1,2,3].map(i => (
        <React.Fragment key={i}>
          <line x1="8" y1={8+i*9} x2="35" y2={8+i*9} strokeOpacity="0.35"/>
          <line x1={8+i*9} y1="8" x2={8+i*9} y2="35" strokeOpacity="0.35"/>
        </React.Fragment>
      ))}
      {dots.map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill={color} fillOpacity="0.8" stroke="none"/>
      ))}
    </SvgIcon>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ULTRAVIOLET
═══════════════════════════════════════════════════════════════ */

function IconSun({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="22" r="7.5"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((d,i) => {
        const [x1,y1]=pt(22,22,11,d), [x2,y2]=pt(22,22,i%2===0?17:15,d);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
      })}
    </SvgIcon>
  );
}

function IconBlacklight({color}) {
  return (
    <SvgIcon color={color}>
      {/* tube body */}
      <rect x="6" y="17" width="32" height="10" rx="5"/>
      {/* electrode caps */}
      <line x1="3" y1="17" x2="3" y2="27"/>
      <line x1="41" y1="17" x2="41" y2="27"/>
      {/* UV glow waves */}
      <path d="M8,30 Q13,34 18,30 Q23,26 28,30 Q33,34 38,30" strokeOpacity="0.7"/>
      <path d="M8,35 Q13,39 18,35 Q23,31 28,35 Q33,39 38,35" strokeOpacity="0.3"/>
      {/* inner glow */}
      <rect x="8" y="19" width="28" height="6" rx="3" fill={color} fillOpacity="0.12" stroke="none"/>
    </SvgIcon>
  );
}

function IconBeaker({color}) {
  return (
    <SvgIcon color={color}>
      <path d="M16,8 L16,20 L7,37 Q7,39 9,39 L35,39 Q37,39 37,37 L28,20 L28,8"/>
      <line x1="14" y1="8" x2="30" y2="8"/>
      {/* UV glow inside */}
      <circle cx="22" cy="31" r="5" fill={color} fillOpacity="0.2" stroke="none"/>
      <path d="M13,30 Q18,25 22,30 Q26,35 31,30" strokeOpacity="0.65"/>
      <path d="M15,35 Q18,32 22,35 Q26,38 29,35" strokeOpacity="0.35"/>
    </SvgIcon>
  );
}

function IconCrystal({color}) {
  return (
    <SvgIcon color={color}>
      <path d="M22,5 L33,17 L22,40 L11,17 Z"/>
      <line x1="11" y1="17" x2="33" y2="17"/>
      <line x1="22" y1="5" x2="11" y2="17" strokeOpacity="0.4"/>
      <line x1="22" y1="5" x2="33" y2="17" strokeOpacity="0.4"/>
      {/* glow lines */}
      <line x1="22" y1="4" x2="22" y2="1" strokeOpacity="0.55"/>
      <line x1="32.5" y1="16.5" x2="37" y2="12" strokeOpacity="0.45"/>
      <line x1="11.5" y1="16.5" x2="7" y2="12" strokeOpacity="0.45"/>
      {/* inner glow */}
      <circle cx="22" cy="22" r="4" fill={color} fillOpacity="0.18" stroke="none"/>
    </SvgIcon>
  );
}

function IconUVSkin({color}) {
  return (
    <SvgIcon color={color}>
      {/* sun */}
      <circle cx="22" cy="10" r="5"/>
      {[0,45,90,135,180,225,270,315].map((d,i) => {
        const [x1,y1]=pt(22,10,7,d), [x2,y2]=pt(22,10,10.5,d);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
      })}
      {/* UV arrow */}
      <line x1="22" y1="17" x2="22" y2="30" strokeDasharray="2.5,2"/>
      <path d="M18.5,27.5 L22,32 L25.5,27.5"/>
      {/* skin layers */}
      <line x1="7" y1="35" x2="37" y2="35"/>
      <line x1="7" y1="38.5" x2="37" y2="38.5" strokeOpacity="0.4"/>
    </SvgIcon>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VISIBLE LIGHT
═══════════════════════════════════════════════════════════════ */

function IconPrism({color}) {
  return (
    <SvgIcon color={color}>
      {/* prism triangle */}
      <path d="M22,5 L40,38 L4,38 Z"/>
      {/* input ray */}
      <line x1="2" y1="16" x2="15" y2="22" strokeOpacity="0.8"/>
      {/* dispersed rays out */}
      <line x1="28" y1="23" x2="42" y2="15"/>
      <line x1="29" y1="25" x2="42" y2="22"/>
      <line x1="29.5" y1="27.5" x2="42" y2="29"/>
      <line x1="30" y1="30" x2="42" y2="36"/>
    </SvgIcon>
  );
}

function IconCamera({color}) {
  return (
    <SvgIcon color={color}>
      <rect x="4" y="14" width="36" height="23" rx="3"/>
      <rect x="14" y="10" width="13" height="4" rx="1"/>
      <circle cx="22" cy="26" r="8.5"/>
      <circle cx="22" cy="26" r="5.5"/>
      <circle cx="22" cy="26" r="2.5" fill={color} fillOpacity="0.5" stroke="none"/>
      <circle cx="34" cy="18" r="2"/>
    </SvgIcon>
  );
}

function IconEye({color}) {
  return (
    <SvgIcon color={color}>
      <path d="M3,22 Q22,5 41,22 Q22,39 3,22 Z"/>
      <circle cx="22" cy="22" r="7.5"/>
      <circle cx="22" cy="22" r="4.5" fill={color} fillOpacity="0.4" stroke="none"/>
      <circle cx="24.5" cy="19.5" r="1.8" fill="rgba(255,255,255,0.65)" stroke="none"/>
    </SvgIcon>
  );
}

function IconMonitor({color}) {
  return (
    <SvgIcon color={color}>
      <rect x="3" y="5" width="38" height="28" rx="3"/>
      <rect x="6" y="8" width="32" height="22" rx="1" strokeOpacity="0.35"/>
      <line x1="22" y1="33" x2="22" y2="39"/>
      <line x1="13" y1="39" x2="31" y2="39"/>
      {/* screen content lines */}
      <line x1="10" y1="13" x2="34" y2="13" strokeOpacity="0.3"/>
      <line x1="10" y1="17" x2="28" y2="17" strokeOpacity="0.3"/>
      <line x1="10" y1="21" x2="31" y2="21" strokeOpacity="0.3"/>
      <line x1="10" y1="25" x2="22" y2="25" strokeOpacity="0.3"/>
    </SvgIcon>
  );
}

function IconFiber({color}) {
  return (
    <SvgIcon color={color}>
      <path d="M4,17 C14,17 14,26 26,26 C36,26 36,19 40,19"/>
      <path d="M4,22 C14,22 18,22 22,22 C26,22 30,18 40,18"/>
      <path d="M4,27 C14,27 14,18 26,18 C36,18 36,25 40,25"/>
      {/* source glow */}
      <circle cx="4" cy="22" r="3.5" fill={color} fillOpacity="0.45" stroke="none"/>
      {/* output glow */}
      <circle cx="40" cy="20.5" r="3.5" fill={color} fillOpacity="0.45" stroke="none"/>
    </SvgIcon>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INFRARED
═══════════════════════════════════════════════════════════════ */

function IconThermal({color}) {
  return (
    <SvgIcon color={color}>
      {/* viewfinder frame corners */}
      <path d="M3,10 L3,3 L10,3" strokeOpacity="0.65"/>
      <path d="M34,3 L41,3 L41,10" strokeOpacity="0.65"/>
      <path d="M41,34 L41,41 L34,41" strokeOpacity="0.65"/>
      <path d="M10,41 L3,41 L3,34" strokeOpacity="0.65"/>
      {/* human thermal silhouette */}
      <circle cx="22" cy="13" r="5.5"/>
      <path d="M14,20 Q22,17 30,20 L29,34 Q22,37 15,34 Z"/>
      <line x1="14" y1="22" x2="8" y2="30"/>
      <line x1="30" y1="22" x2="36" y2="30"/>
      {/* thermal aura rings */}
      <path d="M9,14 Q5,22 9,30" strokeDasharray="2,2" strokeOpacity="0.35"/>
      <path d="M35,14 Q39,22 35,30" strokeDasharray="2,2" strokeOpacity="0.35"/>
    </SvgIcon>
  );
}

function IconRemote({color}) {
  return (
    <SvgIcon color={color}>
      <rect x="14" y="5" width="16" height="34" rx="8"/>
      {/* IR signal waves top-left */}
      <path d="M11,8 Q8,11 11,14" strokeOpacity="0.7"/>
      <path d="M8,5 Q3,11 8,17" strokeOpacity="0.4"/>
      {/* power button */}
      <circle cx="22" cy="16" r="3.5"/>
      {/* buttons grid */}
      {[[17,24],[23,24],[17,30],[23,30]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="4" height="4" rx="1"/>
      ))}
    </SvgIcon>
  );
}

function IconBulb({color}) {
  return (
    <SvgIcon color={color}>
      {/* bulb globe */}
      <path d="M15,27 Q9,20 11,13 Q15,4 22,4 Q29,4 33,13 Q35,20 29,27"/>
      <line x1="15" y1="27" x2="29" y2="27"/>
      {/* base rings */}
      <line x1="15" y1="30" x2="29" y2="30"/>
      <line x1="16" y1="33" x2="28" y2="33"/>
      <line x1="18" y1="36" x2="26" y2="36"/>
      {/* filament */}
      <path d="M18,21 Q22,16 26,21" strokeOpacity="0.6"/>
      {/* heat waves */}
      <path d="M33,13 Q38,16 37,21" strokeDasharray="2,2" strokeOpacity="0.55"/>
      <path d="M36,9 Q42,14 40,20" strokeDasharray="2,2" strokeOpacity="0.3"/>
    </SvgIcon>
  );
}

function IconGoggles({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="14" cy="25" r="10.5"/>
      <circle cx="30" cy="25" r="10.5"/>
      <line x1="24.5" y1="25" x2="19.5" y2="25"/>
      <circle cx="14" cy="25" r="5.5"/>
      <circle cx="30" cy="25" r="5.5"/>
      {/* crosshair marks */}
      <line x1="14" y1="19.5" x2="14" y2="22" strokeOpacity="0.5"/>
      <line x1="14" y1="28" x2="14" y2="30.5" strokeOpacity="0.5"/>
      <line x1="8.5" y1="25" x2="11" y2="25" strokeOpacity="0.5"/>
      <line x1="17" y1="25" x2="19.5" y2="25" strokeOpacity="0.5"/>
    </SvgIcon>
  );
}

function IconEarth({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="27" r="13"/>
      {/* continent shapes */}
      <path d="M14,22 Q18,18 21,22 Q19,25 15,26" strokeOpacity="0.55"/>
      <path d="M25,18 Q29,18 31,21 Q29,24 26,23" strokeOpacity="0.55"/>
      {/* heat arrows */}
      <line x1="22" y1="14" x2="22" y2="6"/>
      <path d="M19.5,8.5 L22,4 L24.5,8.5"/>
      <line x1="12" y1="18" x2="8" y2="10"/>
      <path d="M6,12.5 L8,8 L12,11"/>
      <line x1="32" y1="18" x2="36" y2="10"/>
      <path d="M33,11 L36,7 L39,10"/>
    </SvgIcon>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MICROWAVES
═══════════════════════════════════════════════════════════════ */

function IconMicrowave({color}) {
  return (
    <SvgIcon color={color}>
      {/* oven body */}
      <rect x="3" y="10" width="38" height="26" rx="3"/>
      {/* door with window */}
      <rect x="5" y="12" width="26" height="22" rx="2"/>
      <circle cx="18" cy="23" r="7.5" strokeOpacity="0.6"/>
      {/* microwave pattern inside window */}
      <path d="M12,23 Q15.5,19.5 18,23 Q20.5,26.5 24,23" strokeOpacity="0.85"/>
      {/* door handle */}
      <circle cx="7" cy="23" r="1.8"/>
      {/* control panel */}
      <rect x="33" y="13" width="6" height="20" rx="1" strokeOpacity="0.5"/>
      <circle cx="36" cy="20" r="2.5" strokeOpacity="0.7"/>
      <line x1="34" y1="26" x2="38" y2="26" strokeOpacity="0.4"/>
      <line x1="34" y1="29" x2="38" y2="29" strokeOpacity="0.4"/>
    </SvgIcon>
  );
}

function IconWifi({color}) {
  return (
    <SvgIcon color={color}>
      <path d="M5,22 Q22,4 39,22"/>
      <path d="M10,27 Q22,13 34,27"/>
      <path d="M15,32 Q22,22 29,32"/>
      <circle cx="22" cy="37" r="2.8" fill={color} fillOpacity="0.8" stroke="none"/>
    </SvgIcon>
  );
}

function IconRadarDish({color}) {
  return (
    <SvgIcon color={color}>
      {/* dish */}
      <path d="M8,7 Q22,22 36,7"/>
      <line x1="22" y1="7" x2="22" y2="15"/>
      {/* base */}
      <line x1="22" y1="22" x2="22" y2="37"/>
      <line x1="12" y1="37" x2="32" y2="37"/>
      {/* sweep */}
      <path d="M22,22 L39,15 A18,18 0 0,1 39,29 Z" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.35"/>
      <circle cx="22" cy="22" r="15" strokeDasharray="4,3" strokeOpacity="0.22"/>
      <circle cx="22" cy="22" r="9" strokeDasharray="3,2" strokeOpacity="0.32"/>
      <circle cx="22" cy="22" r="2.8" fill={color} fillOpacity="0.65" stroke="none"/>
    </SvgIcon>
  );
}

function IconSatellite({color}) {
  return (
    <SvgIcon color={color}>
      {/* body */}
      <rect x="17" y="17" width="10" height="10" rx="2"/>
      {/* solar panels */}
      <rect x="2" y="19" width="13" height="6" rx="1"/>
      <rect x="29" y="19" width="13" height="6" rx="1"/>
      {/* panel cell lines */}
      <line x1="6.5" y1="19" x2="6.5" y2="25" strokeOpacity="0.4"/>
      <line x1="11" y1="19" x2="11" y2="25" strokeOpacity="0.4"/>
      <line x1="33" y1="19" x2="33" y2="25" strokeOpacity="0.4"/>
      <line x1="37.5" y1="19" x2="37.5" y2="25" strokeOpacity="0.4"/>
      {/* signal waves */}
      <path d="M25,15 Q30,9 36,7" strokeDasharray="2,2" strokeOpacity="0.6"/>
      <path d="M19,15 Q14,9 8,7" strokeDasharray="2,2" strokeOpacity="0.6"/>
    </SvgIcon>
  );
}

function IconSatDish({color}) {
  return (
    <SvgIcon color={color}>
      {/* parabolic dish */}
      <path d="M5,37 Q7,14 28,6 A24,24 0 0,1 43,28"/>
      <line x1="5" y1="37" x2="43" y2="28" strokeOpacity="0.25"/>
      {/* feed */}
      <circle cx="26" cy="19" r="2.5"/>
      <line x1="27.5" y1="20.5" x2="22" y2="29"/>
      {/* base */}
      <line x1="21" y1="37" x2="21" y2="43"/>
      <line x1="13" y1="43" x2="29" y2="43"/>
    </SvgIcon>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RADIO WAVES
═══════════════════════════════════════════════════════════════ */

function IconRadioBox({color}) {
  return (
    <SvgIcon color={color}>
      <rect x="4" y="12" width="36" height="26" rx="3"/>
      {/* speaker */}
      <rect x="7" y="15" width="18" height="18" rx="2"/>
      {[18,21,24,28].map(y => (
        <line key={y} x1="9" y1={y} x2="23" y2={y} strokeOpacity="0.4"/>
      ))}
      {/* tuning dial */}
      <circle cx="33" cy="22" r="4.5"/>
      <line x1="33" y1="17.5" x2="33" y2="20" strokeOpacity="0.65"/>
      {/* volume dial */}
      <circle cx="33" cy="31" r="3.5"/>
      {/* antenna */}
      <line x1="31" y1="12" x2="37" y2="4"/>
    </SvgIcon>
  );
}

function IconBroadcastTower({color}) {
  return (
    <SvgIcon color={color}>
      <line x1="22" y1="4" x2="22" y2="38"/>
      <line x1="18" y1="11" x2="26" y2="11"/>
      <line x1="15" y1="20" x2="29" y2="20"/>
      <line x1="11" y1="30" x2="33" y2="30"/>
      <line x1="7" y1="38" x2="37" y2="38"/>
      {/* broadcast arcs left */}
      <path d="M10,13 Q7,19 10,25" strokeOpacity="0.7"/>
      <path d="M6,8 Q1,19 6,30" strokeOpacity="0.35"/>
      {/* broadcast arcs right */}
      <path d="M34,13 Q37,19 34,25" strokeOpacity="0.7"/>
      <path d="M38,8 Q43,19 38,30" strokeOpacity="0.35"/>
    </SvgIcon>
  );
}

function IconCellTower({color}) {
  return (
    <SvgIcon color={color}>
      <line x1="22" y1="5" x2="22" y2="40"/>
      <line x1="15" y1="7" x2="29" y2="7"/>
      <line x1="17" y1="11" x2="27" y2="11"/>
      {/* cross bracing */}
      <line x1="16" y1="20" x2="28" y2="30"/>
      <line x1="28" y1="20" x2="16" y2="30"/>
      {/* base struts */}
      <line x1="22" y1="30" x2="12" y2="40"/>
      <line x1="22" y1="30" x2="32" y2="40"/>
      {/* signal arcs */}
      <path d="M8,13 Q5,18 8,23" strokeOpacity="0.7"/>
      <path d="M4,9 Q0,18 4,27" strokeOpacity="0.35"/>
      <path d="M36,13 Q39,18 36,23" strokeOpacity="0.7"/>
    </SvgIcon>
  );
}

function IconRadioTelescope({color}) {
  return (
    <SvgIcon color={color}>
      {/* dish */}
      <path d="M3,33 Q22,3 41,33"/>
      <line x1="3" y1="33" x2="41" y2="33"/>
      {/* feed horn */}
      <line x1="22" y1="15" x2="22" y2="9"/>
      <circle cx="22" cy="9" r="2.5"/>
      {/* support cables */}
      <line x1="3" y1="33" x2="22" y2="9" strokeOpacity="0.28"/>
      <line x1="41" y1="33" x2="22" y2="9" strokeOpacity="0.28"/>
      {/* mount */}
      <line x1="22" y1="33" x2="22" y2="41"/>
      <line x1="14" y1="41" x2="30" y2="41"/>
    </SvgIcon>
  );
}

function IconCompass({color}) {
  return (
    <SvgIcon color={color}>
      <circle cx="22" cy="22" r="17"/>
      <circle cx="22" cy="22" r="2.2" fill={color} fillOpacity="0.8" stroke="none"/>
      {/* cardinal ticks */}
      <line x1="22" y1="5" x2="22" y2="9"/>
      <line x1="22" y1="35" x2="22" y2="39"/>
      <line x1="5" y1="22" x2="9" y2="22"/>
      <line x1="35" y1="22" x2="39" y2="22"/>
      {/* needle — north red tip */}
      <path d="M22,22 L18.5,13 L22,20 Z" fill={color} fillOpacity="0.75" stroke="none"/>
      {/* needle — south */}
      <path d="M22,22 L25.5,31 L22,24 Z" fill="none" stroke={color} strokeOpacity="0.4"/>
    </SvgIcon>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXAMPLE ICONS MAP
═══════════════════════════════════════════════════════════════ */
const EXAMPLE_ICONS = {
  gamma: [
    { label: 'Nuclear radiation',   render: c => <IconNuclear color={c}/> },
    { label: 'Gamma-ray bursts',    render: c => <IconBurst color={c}/> },
    { label: 'Cancer radiotherapy', render: c => <IconTarget color={c}/> },
    { label: 'Radioactive decay',   render: c => <IconAtom color={c}/> },
    { label: 'Supernova remnants',  render: c => <IconSupernova color={c}/> },
  ],
  xray: [
    { label: 'Medical imaging',   render: c => <IconHand color={c}/> },
    { label: 'Airport scanners',  render: c => <IconSuitcase color={c}/> },
    { label: 'Dental X-rays',     render: c => <IconTooth color={c}/> },
    { label: 'CT scans',          render: c => <IconCTScan color={c}/> },
    { label: 'Crystallography',   render: c => <IconLattice color={c}/> },
  ],
  uv: [
    { label: 'Sunburn',               render: c => <IconSun color={c}/> },
    { label: 'Black lights',          render: c => <IconBlacklight color={c}/> },
    { label: 'UV sterilization',      render: c => <IconBeaker color={c}/> },
    { label: 'Fluorescent minerals',  render: c => <IconCrystal color={c}/> },
    { label: 'Vitamin D synthesis',   render: c => <IconUVSkin color={c}/> },
  ],
  visible: [
    { label: 'Rainbows',         render: c => <IconPrism color={c}/> },
    { label: 'Camera sensors',   render: c => <IconCamera color={c}/> },
    { label: 'Human vision',     render: c => <IconEye color={c}/> },
    { label: 'Screens',          render: c => <IconMonitor color={c}/> },
    { label: 'Optical fibers',   render: c => <IconFiber color={c}/> },
  ],
  infrared: [
    { label: 'Thermal cameras',    render: c => <IconThermal color={c}/> },
    { label: 'TV remotes',         render: c => <IconRemote color={c}/> },
    { label: 'Heat lamps',         render: c => <IconBulb color={c}/> },
    { label: 'Night vision',       render: c => <IconGoggles color={c}/> },
    { label: "Earth's heat",       render: c => <IconEarth color={c}/> },
  ],
  micro: [
    { label: 'Microwave ovens',  render: c => <IconMicrowave color={c}/> },
    { label: 'Wi-Fi',            render: c => <IconWifi color={c}/> },
    { label: 'Radar',            render: c => <IconRadarDish color={c}/> },
    { label: 'GPS / Satellites', render: c => <IconSatellite color={c}/> },
    { label: 'Satellite dishes', render: c => <IconSatDish color={c}/> },
  ],
  radio: [
    { label: 'AM/FM radio',       render: c => <IconRadioBox color={c}/> },
    { label: 'Broadcast towers',  render: c => <IconBroadcastTower color={c}/> },
    { label: 'Cell towers',       render: c => <IconCellTower color={c}/> },
    { label: 'Radio telescopes',  render: c => <IconRadioTelescope color={c}/> },
    { label: 'Navigation',        render: c => <IconCompass color={c}/> },
  ],
};

Object.assign(window, { EXAMPLE_ICONS });

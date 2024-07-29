import {  Box, Container, List, Tooltip, Typography } from '@mui/material';
import { Header } from '../layout/Header';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Radar,Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, AreaChart, XAxis, YAxis, CartesianGrid, Area } from 'recharts';


const data = [
    { stat: 'Strength', A: 120, B: 110, fullMark: 150 },
    { stat: 'Vitality', A: 98, B: 130, fullMark: 150 },
    { stat: 'Agility', A: 86, B: 130, fullMark: 150 },
    { stat: 'Intelligence', A: 99, B: 100, fullMark: 150 },
    { stat: 'Sense', A: 85, B: 90, fullMark: 150 },
    { stat: 'Charisma   ', A: 65, B: 85, fullMark: 150 }
  ];

const items = [
    'Slayed Demon King',
    'Infinite Strength',
    'Mastered Swordsmanship',
    'Acquired Magic Powers',
    'Defeated Evil Sorcerer',
    'Protected the Kingdom',
    'Discovered Hidden Treasures',
    'Tamed Mythical Beasts',
    'Achieved Immortality',
    'Rescued the Princess',
    'Conquered the Dark Realm',
    'Unraveled Ancient Mysteries',
    'Achieved Immortality',
    'Rescued the Princess',
    'Conquered the Dark Realm',
    'Unraveled Ancient Mysteries',
];
const areaData = [
    { "name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400 },
    { "name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210 },
    { "name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290 },
    { "name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000 },
    { "name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181 },
    { "name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500 },
    { "name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100 }
  ];
  
  

export const Home: React.FC = () =>{
    
    return (
        <>
        <Container  sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            padding: 0,
            justifyContent: 'space-between',
            overflow: 'hidden',
            '&.MuiContainer-root': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        }} maxWidth={false}>
            <Header/>
                  <Box
                sx={{
                    backgroundColor: 'lightgray',
                    flex: 0.75,
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '2px solid black',
                }}
            >
                <Box sx={{flex:4,display:'flex'}}>
                <Box
                  sx={{
                    width: '30vh',  
                    height: '30vh',  
                    marginLeft: '3vh',
                    marginRight: '3vh',
                    backgroundImage: 'url(https://i.pinimg.com/236x/bf/c8/d0/bfc8d05b60bb87c8ed14c9ca446df73e.jpg)', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '4px', 
                  }}
                />
                <Box   sx={{
                    width: '30vh',  
                    height: '30vh',  }}
                    >
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>Name: Sung jin woo</Typography>
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>Title: Grandmaster</Typography>
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>Aura: 499</Typography>
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>Level: 56</Typography>
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>XP: 2343</Typography>
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>HP: 78</Typography>
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>MP: 11893</Typography>
                    <Typography variant="h5" sx={{marginBottom:'2px'}}>Fatigue: 78 </Typography>
                </Box>
                </Box>
                <Box sx={{
                    flex:2,
                    marginRight:-50,
                    }}>
                        <Box sx={{
                            backgroundColor:'#1976D2',
                            width: '35vh',
                            height: '35vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: '4px', 
                            cursor: 'pointer',
                        }}>
                            <Typography variant='h4' sx={{
                                marginTop: '10px',
                                color: 'white',
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontSize: 25,
                                fontWeight: 700,
                            }}
                            >Recent Achievements</Typography>
                         <List sx={{
                            width: '90%',
                            overflow: 'hidden',
                            overflowY: 'auto',
                            maxHeight: '400px',
                         }}>
                            {items.map((item)=>(
                            <Box sx={{display: 'flex'}}>
                            <WorkspacePremiumIcon sx={{marginLeft:3,marginRight:2}}/>
                            <Typography sx={{color: 'white'}}>{item}</Typography>
                            </Box>
                            ))
                        }
                        </List>
                        </Box>
                    </Box>
            </Box>

            <Box
                sx={{
                    backgroundColor: 'lightgray',
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* AREA CHART */}
                <Box sx={{flex:6, marginLeft:'10vh'}}>
                <AreaChart width={1200} height={300} data={areaData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* REMOVED TOOLTIP */}
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </Box>
             <Box sx={{flex:2,marginRight:-10}}> {/*REVIEW */}
                <RadarChart outerRadius={170} width={800} height={400} data={data}>
                    <PolarGrid  />
                    <PolarAngleAxis dataKey="stat" tick={{ fill: 'black' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 10]}  />
                    <Radar name="Characterstics" dataKey="A" stroke="#1976D2" fill="#1976D2" fillOpacity={0.5} />
                    <Legend />
                </RadarChart>
                </Box>
            </Box>

        </Container>
        </>
    )
}




import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './forcecast.css';

const WEEK_DAY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


const Forcecast = ({data}) =>{
  
  const dayInAWeek = new Date().getDay();
 const forcecastDay = WEEK_DAY.slice(dayInAWeek, WEEK_DAY.length).concat(WEEK_DAY.slice(0,dayInAWeek));
  
 
  
 return (
    <div className="force">
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
             {data.list.splice(0,7).map((item,idx)=>(
              <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img alt="weather" className="smal-icon" src={`icon/${item.weather[0].icon}.png`}/>
                    <label className="day">{forcecastDay[idx]}</label>
                    <label className="descriptions"> {item.weather[0].description}</label>
                    <label className="min-max"> {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-panel_grid">
                  <div className="daily-panel_grid-item">
                    <label>Presure:</label>
                    <label className="">{item.main.pressure}hPa</label>
                  </div>
                  <div className="daily-panel_grid-item">
                    <label>Humidity:</label>
                    <label className="">{item.main.humidity}%</label>
                  </div>
                  <div className="daily-panel_grid-item">
                    <label>Clouds:</label>
                    <label className="">{item.clouds.all} %</label>
                  </div>
                  <div className="daily-panel_grid-item">
                    <label>Wind speed:</label>
                    <label className="">{Math.round(item.wind.speed)} m/s</label>
                  </div>
                  <div className="daily-panel_grid-item">
                    <label>Sea level:</label>
                    <label className="">{item.main.sea_level} cm</label>
                  </div>
                  <div className="daily-panel_grid-item">
                    <label>Feel like:</label>
                    <label className="">{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
              </AccordionItem>
             ))}
             
      </Accordion>
    </div>
  )
}

export default Forcecast
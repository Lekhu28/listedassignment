import './Dashboard.css'
import Chart from "react-apexcharts"
import Ellipse6  from '../img/ellipse-6.svg'
import Dashboardicon  from '../img/dashboard-icon.svg'
import Ellipse3  from '../img/ellipse-3.svg'
import Ellipse4  from '../img/ellipse-4.svg'
import Ellipse61  from '../img/ellipse-61.svg'
import Ellipse62  from '../img/ellipse-62.svg'
import Line1  from '../img/line-chart-1.svg'
import Line2  from '../img/line-chart-2.svg'
import Maskgroup  from '../img/mask-group@2x.png'
import Pie  from '../img/pie-chart.svg'
import Schedule  from '../img/schedule-icon.svg'
import Search  from '../img/search-icon.svg'
import Setting  from '../img/setting-icon.svg'
import Totalicon  from '../img/total-transactions-icon.svg'
import Transicon  from '../img/transaction-icon.svg'
import Usericon  from '../img/user-icon.svg'
import Vector  from '../img/vector.svg'
import Vector1  from '../img/vector1.svg'
import Vector2  from '../img/vector2.svg'
import Vector3  from '../img/vector3.svg'
import Vector4  from '../img/vector4.svg'
import Vector5  from '../img/vector5.svg'


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="navigation">
        <div className="left-side" />
        <div className="help">Help</div>
        <div className="contact-us">Contact Us</div>
        <div className="settings">Settings</div>
        <div className="users">Users</div>
        <div className="schedules">Schedules</div>
        <div className="transactions">Transactions</div>
        <b className="dashboard1">Dashboard</b>
      <img className="transaction-icon" alt="" src={Transicon} />
        <img className="schedule-icon" alt="" src={Schedule} />
        <img className="dashboard-icon" alt="" src={Dashboardicon}/>
        <img className="setting-icon" alt="" src={Setting} />
        <img className="user-icon" alt="" src={Usericon} />
        <b className="board">Board.</b>
      </div>
      <div className="total-transactions">
        <div className="card">
          <div className="card1" />
        </div>
        <div className="total-transactions1">Total Transactions</div>
        <b className="b">1,520</b>
        <img
  className="total-transactions-icon"
  alt=""
  src={Totalicon}
/>
      </div>
      <div className="total-revenues">
        <div className="card">
          <div className="card3" />
        </div>
        <div className="total-revenues1">Total Revenues</div>
        <b className="b1">$2,129,430</b>
        <img className="vector-icon" alt="" src={Vector} />
      </div>
      <div className="total-likes">
        <div className="card">
          <div className="card5" />
        </div>
        <div className="total-likes1">Total Likes</div>
        <b className="b2">9,721</b>
        <img className="vector-icon1" alt="" src={Vector1} />
      </div>
      <div className="total-users">
        <div className="card">
          <div className="card7" />
        </div>
        <img className="vector-icon2" alt="" src={Vector2} />
        <div className="total-users1">Total Users</div>
        <b className="b3">892</b>
      </div>
      <div className="activities-card">
        <div className="card8">
          <div className="card9" />
        </div>
        <div className="guest">Guest</div>
        <div className="user">User</div>
        <b className="activities">Activities</b>
        <div className="may-june-2021-parent">
          <div className="may-june">May - June 2021</div>
          <img className="vector-icon3" alt="" src={Vector3} />
        </div>
        <div className="chart">
          <div className="parent">
            <div className="div">500</div>
            <div className="group-child" />
          </div>
          <div className="group">
            <div className="div">300</div>
            <div className="group-child" />
          </div>
          <div className="container">
            <div className="div">400</div>
            <div className="group-child" />
          </div>
          <div className="group-div">
            <div className="div">200</div>
            <div className="group-child" />
          </div>
          <div className="parent1">
            <div className="div">100</div>
            <div className="group-child" />
          </div>
          <div className="parent2">
            <div className="div5">0</div>
            <div className="group-child2" />
          </div>
        </div>
        <img className="activities-card-child" alt="" src={Ellipse3} />
        <img className="activities-card-item" alt="" src={Ellipse4} />
      </div>
      <div className="top-products-card">
        <div className="card10">
          <div className="card9" />
        </div>
        <div className="div6">
          <img className="child" alt="" src={Ellipse6} />
          <b className="basic-tees">Basic Tees</b>
          <div className="div7">55%</div>
        </div>
        <div className="may-june-2021-wrapper">
          <div className="may-june1">May - June 2021</div>
        </div>
        <img className="vector-icon4" alt="" src={Vector3} />
        <div className="div8">
          <img className="child" alt="" src={Ellipse61} />
          <b className="basic-tees">Custom Short Pants</b>
          <div className="div7">31%</div>
        </div>
        <div className="div10">
          <img className="child" alt="" src={Ellipse62} />
          <b className="basic-tees">Super Hoodies</b>
          <div className="div7">14%</div>
        </div>
        <b className="top-products">Top products</b>
        <img className="pie-chart-icon" alt="" src={Pie} />
      </div>
      <div className="schedules-card">
        <div className="card10">
          <div className="card9" />
        </div>
        <b className="todays-schedule">Today’s schedule</b>
        <div className="meeting-with-suppliers-from-ku-parent">
          <b className="meeting-with-suppliers">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="div12">14.00-15.00</div>
          <div className="at-sunset-road">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="group-child3" />
        </div>
        <div className="see-all">See All</div>
        <img className="vector-icon5" alt="" src={Vector4} />
        <div className="check-operation-at-giga-factor-parent">
          <b className="meeting-with-suppliers">
            Check operation at Giga Factory 1
          </b>
          <div className="div12">18.00-20.00</div>
          <div className="at-sunset-road">{`at Central Jakarta `}</div>
          <div className="group-child4" />
        </div>
      </div>
      <div className="chart-weeks">
        <div className="week-1">Week 1</div>
        <div className="week-2">Week 2</div>
        <div className="week-3">Week 3</div>
        <div className="week-4">Week 4</div>
      </div>
      <img className="line-chart-2-icon" alt="" src={Line2} />
      <img className="line-chart-1-icon" alt="" src={Line1} />
      <div className="header">
        <b className="dashboard2">Dashboard</b>
        <div className="search-bar">
          <div className="white">
            <div className="button" />
          </div>
          <div className="search">Search...</div>
          <img className="search-icon" alt="" src={Search} />
        </div>
        <img className="mask-group-icon" alt="" src={Maskgroup} />
        <img className="vector-icon6" alt="" src={Vector5}/>
      </div>
    </div>
  );
};

export default Dashboard;

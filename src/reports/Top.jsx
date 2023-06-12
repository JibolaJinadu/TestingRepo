import ReportBarChart from './ReportBarChart';
import ReportPieChart from './ReportPieChart';
import './style.css';

export default function Top() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        padding: '10px',
        margin: '0 10px',
      }}
    >
      <div className="sect-top bg-report">
        <div className="report-item">
          <p className="report-dark">Activities</p>
          <p>
            <select className="select-bg">
              <option value="year" hidden>
                Year
              </option>
              <option value="year">2023</option>
              <option value="year">2022</option>
              <option value="year">2021</option>
            </select>
          </p>
        </div>
        <div className="report-item">
          <p className="base-report set-bg">Total number of loan application</p>
          <h4 className="move-left">182</h4>
        </div>
        <div className="report-item">
          <p className="base-report set-bg">
            Total value of all loan applications
          </p>
          <h4>NGN325,450,000'</h4>
        </div>
        <div className="report-piechart move-down">
          <ReportPieChart />
        </div>

        <div className="shift-report bg-report">
          <span className="dot-report">&nbsp;</span>
          <span className="report-dark">Default</span>
        </div>
        <div className="report-item">
          <p className="self-report set-bg">Total number of default</p>
          <h4 className="solo-report move-left">8</h4>
        </div>
        <div className="report-item">
          <p className="base-report set-bg">
            Total number of defaulting payment
          </p>
          <h4>NGN5,102,740</h4>
        </div>
        <div className="report-item">
          <p className="base-report set-bg">Total value of disbursed loans</p>
          <h4>NGN98,952,700</h4>
        </div>
        <div className="report-item">
          <p className="base-report set-bg">
            Total value of loan repayment loan
          </p>
          <h4>NGN61,245,750</h4>
        </div>
      </div>

      <div className="sect-top bg-report">
        <div className="report-item shift-report">
          <p className="report-dark">Complete Payment</p>
          <p>
            <select className="select-bg">
              <option value="year" hidden>
                Month
              </option>
              <option value="year">January</option>
              <option value="year">Febuary</option>
              <option value="year">March</option>
              <option value="year">April</option>
              <option value="year">May</option>
              <option value="year">June</option>
              <option value="year">July</option>
              <option value="year">August</option>
              <option value="year">September</option>
              <option value="year">October</option>
              <option value="year">November</option>
              <option value="year">December</option>
            </select>
          </p>
        </div>
        <p className="hr-report"></p>

        <div className="gap-report report-item shift-report">
          <div>
            <h4>115</h4>
            <p>Total number of completed payments</p>
          </div>
          <div>
            <h4>NGN41,952,700</h4>
            <p>Total number of uncompleted payments</p>
          </div>
        </div>
        <p className="hr-report"></p>
        <div className="mid-report shift-report">
          <button className="button-report">Approved vs Pending</button>
        </div>
        <p style={{ backgroundColor: 'white', marginTop: '100px' }}>
          <ReportBarChart style={{ padding: '50px' }} />
        </p>
      </div>
    </div>
  );
}

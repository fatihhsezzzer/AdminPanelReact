import React from 'react';

const PageContent = () => {
    return (
        <main className="page-content">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4 row-cols-xxl-4">
                <div className="col">
                    <div className="card radius-10 border-0 border-start border-primary border-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <p className="mb-1">Total Orders</p>
                                    <h4 className="mb-0 text-primary">248</h4>
                                </div>
                                <div className="ms-auto widget-icon bg-primary text-white">
                                    <i className="bi bi-basket2-fill"></i>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{ height: '4.5px' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card radius-10 border-0 border-start border-success border-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <p className="mb-1">Total Revenue</p>
                                    <h4 className="mb-0 text-success">$1,245</h4>
                                </div>
                                <div className="ms-auto widget-icon bg-success text-white">
                                    <i className="bi bi-currency-dollar"></i>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{ height: '4.5px' }}>
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card radius-10 border-0 border-start border-danger border-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <p className="mb-1">Bounce Rate</p>
                                    <h4 className="mb-0 text-danger">24.25%</h4>
                                </div>
                                <div className="ms-auto widget-icon bg-danger text-white">
                                    <i className="bi bi-graph-down-arrow"></i>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{ height: '4.5px' }}>
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card radius-10 border-0 border-start border-warning border-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <p className="mb-1">New Users</p>
                                    <h4 className="mb-0 text-warning">214</h4>
                                </div>
                                <div className="ms-auto widget-icon bg-warning text-dark">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{ height: '4.5px' }}>
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0 fw-bold">Sales Overview</h6>
                                </div>
                                <div className="dropdown ms-auto">
                                    <button
                                        type="button"
                                        className="btn-option dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="bi bi-three-dots fs-4"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="chart1"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0 fw-bold">Statistic</h6>
                                </div>
                                <div className="dropdown ms-auto">
                                    <button
                                        type="button"
                                        className="btn-option dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="bi bi-three-dots fs-4"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="chart2"></div>
                        </div>
                        <ul className="list-group list-group-flush mb-0">
                            <li className="list-group-item border-top d-flex justify-content-between align-items-center bg-transparent">
                                Mobile<span className="badge bg-success rounded-pill">25%</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                Desktop<span className="badge bg-primary rounded-pill">65%</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                Tablet<span className="badge bg-danger rounded-pill">10%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <div className="card w-100">
                        <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0 fw-bold">Team Members</h6>
                                </div>
                                <div className="dropdown ms-auto">
                                    <button
                                        type="button"
                                        className="btn-option dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="bi bi-three-dots fs-4"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="team-list">
                                {[
                                    {
                                        imgSrc: '01.png',
                                        name: 'John Michael',
                                        status: 'ONLINE',
                                        statusClass: 'bg-success bg-success-subtle text-success border border-opacity-25 border-success',
                                    },
                                    {
                                        imgSrc: '02.png',
                                        name: 'Samantha Ivy',
                                        status: 'IN MEETING',
                                        statusClass: 'bg-danger-subtle text-danger border border-opacity-25 border-danger',
                                    },
                                    {
                                        imgSrc: '03.png',
                                        name: 'Alex Smith',
                                        status: 'OFFLINE',
                                        statusClass: 'bg-warning-subtle text-warning border border-opacity-25 border-warning',
                                    },
                                    {
                                        imgSrc: '04.png',
                                        name: 'Alex Smith',
                                        status: 'OFFLINE',
                                        statusClass: 'bg-danger-subtle text-danger border border-opacity-25 border-danger',
                                    },
                                    {
                                        imgSrc: '02.png',
                                        name: 'Samantha',
                                        status: 'IN MEETING',
                                        statusClass: 'bg-success-subtle text-success border border-opacity-25 border-success',
                                    },
                                ].map((member, index) => (
                                    <React.Fragment key={index}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <img
                                                    src={`assets/images/avatars/${member.imgSrc}`}
                                                    alt=""
                                                    width="50"
                                                    height="50"
                                                    className="rounded-circle"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1 fw-bold">{member.name}</h6>
                                                <span className={`badge ${member.statusClass}`}>{member.status}</span>
                                            </div>
                                            <div>
                                                <button className="btn btn-outline-primary rounded-5 btn-sm px-3">Add</button>
                                            </div>
                                        </div>
                                        {index < 4 && <hr />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                    <div className="card w-100">
                        <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0 fw-bold">To do list</h6>
                                </div>
                                <div className="dropdown ms-auto">
                                    <button
                                        type="button"
                                        className="btn-option dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="bi bi-three-dots fs-4"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="team-list">
                                {[
                                    { title: 'Meeting with John', time: '10:56 PM', borderClass: 'border-success', checked: true },
                                    { title: 'Meeting with John', time: '10:56 PM', borderClass: 'border-danger', checked: true },
                                    { title: 'Meeting with John', time: '10:56 PM', borderClass: 'border-primary', checked: true },
                                    { title: 'Meeting with John', time: '10:56 PM', borderClass: 'border-warning', checked: true },
                                    { title: 'Meeting with John', time: '10:56 PM', borderClass: 'border-info', checked: true },
                                ].map((todo, index) => (
                                    <React.Fragment key={index}>
                                        <div className={`d-flex align-items-center gap-3 border-start ${todo.borderClass} border-4 border-0 px-2 py-1`}>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1 fw-bold">{todo.title}</h6>
                                                <span>{todo.time}</span>
                                            </div>
                                            <div className={`form-check form-switch form-check-${todo.borderClass.split('-')[1]} border-0`}>
                                                <input
                                                    className="form-check-input border-1"
                                                    type="checkbox"
                                                    role="switch"
                                                    checked={todo.checked}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        {index < 4 && <hr />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-4 d-flex">
                    <div className="card w-100">
                        <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0 fw-bold">Projects</h6>
                                </div>
                                <div className="dropdown ms-auto">
                                    <button
                                        type="button"
                                        className="btn-option dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="bi bi-three-dots fs-4"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="team-list">
                                {[
                                    { imgSrc: 'apple.png', title: 'Angular 12 Dashboard', progress: '75%' },
                                    { imgSrc: 'bootstrap.png', title: 'Angular 12 Dashboard', progress: '70%' },
                                    { imgSrc: 'google-2.png', title: 'Angular 12 Dashboard', progress: '65%' },
                                    { imgSrc: 'spotify.png', title: 'Angular 12 Dashboard', progress: '55%' },
                                    { imgSrc: 'outlook.png', title: 'Angular 12 Dashboard', progress: '45%' },
                                ].map((project, index) => (
                                    <React.Fragment key={index}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="widget-icon bg-transparent border rounded-3">
                                                <img src={`assets/images/icons/${project.imgSrc}`} alt="" width="30" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-2 fw-bold">{project.title}</p>
                                                <div className="progress" style={{ height: '5px' }}>
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: project.progress }}
                                                        aria-valuenow={parseInt(project.progress)}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        {index < 4 && <hr />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-12 col-xl-6">
                    <div className="card">
                        <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0 fw-bold">Monthly Views</h6>
                                </div>
                                <div className="dropdown ms-auto">
                                    <button
                                        type="button"
                                        className="btn-option dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="bi bi-three-dots fs-4"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="chart3"></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-6">
                    <div className="card">
                        <div className="card-header bg-transparent">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0 fw-bold">Monthly Users</h6>
                                </div>
                                <div className="dropdown ms-auto">
                                    <button
                                        type="button"
                                        className="btn-option dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="bi bi-three-dots fs-4"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Action</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Another action</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="chart4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="customer-table">
                        <div className="table-responsive white-space-nowrap">
                            <table className="table align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>
                                            <input className="form-check-input" type="checkbox" />
                                        </th>
                                        <th>Order Id</th>
                                        <th>Price</th>
                                        <th>Customer</th>
                                        <th>Payment Status</th>
                                        <th>Completed Payment</th>
                                        <th>Delivery Type</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            orderId: '#2415',
                                            price: '$98',
                                            customerImg: '01.png',
                                            customerName: 'Andrew Carry',
                                            paymentStatus: 'Completed',
                                            paymentStatusClass: 'bg-success-subtle text-success',
                                            completedPaymentStatus: 'Failed',
                                            completedPaymentStatusClass: 'bg-danger-subtle text-danger',
                                            deliveryType: 'Cash on delivery',
                                            date: 'Nov 12, 10:45 PM',
                                        },
                                        {
                                            orderId: '#7845',
                                            price: '$110',
                                            customerImg: '02.png',
                                            customerName: 'Andrew Carry',
                                            paymentStatus: 'Pending',
                                            paymentStatusClass: 'bg-warning-subtle text-warning',
                                            completedPaymentStatus: 'Completed',
                                            completedPaymentStatusClass: 'bg-primary-subtle text-primary',
                                            deliveryType: 'Cash on delivery',
                                            date: 'Nov 12, 10:45 PM',
                                        },
                                        {
                                            orderId: '#5674',
                                            price: '$86',
                                            customerImg: '03.png',
                                            customerName: 'Andrew Carry',
                                            paymentStatus: 'Completed',
                                            paymentStatusClass: 'bg-primary-subtle text-primary',
                                            completedPaymentStatus: 'Failed',
                                            completedPaymentStatusClass: 'bg-danger-subtle text-danger',
                                            deliveryType: 'Cash on delivery',
                                            date: 'Nov 12, 10:45 PM',
                                        },
                                        {
                                            orderId: '#6678',
                                            price: '$78',
                                            customerImg: '04.png',
                                            customerName: 'Andrew Carry',
                                            paymentStatus: 'Paid',
                                            paymentStatusClass: 'bg-success-subtle text-success',
                                            completedPaymentStatus: 'Failed',
                                            completedPaymentStatusClass: 'bg-danger-subtle text-danger',
                                            deliveryType: 'Cash on delivery',
                                            date: 'Nov 12, 10:45 PM',
                                        },
                                        {
                                            orderId: '#2367',
                                            price: '$69',
                                            customerImg: '05.png',
                                            customerName: 'Andrew Carry',
                                            paymentStatus: 'Failed',
                                            paymentStatusClass: 'bg-danger-subtle text-danger',
                                            completedPaymentStatus: 'Pending',
                                            completedPaymentStatusClass: 'bg-warning-subtle text-warning',
                                            deliveryType: 'Cash on delivery',
                                            date: 'Nov 12, 10:45 PM',
                                        },
                                        {
                                            orderId: '#9870',
                                            price: '$49',
                                            customerImg: '06.png',
                                            customerName: 'Andrew Carry',
                                            paymentStatus: 'Failed',
                                            paymentStatusClass: 'bg-danger-subtle text-danger',
                                            completedPaymentStatus: 'Completed',
                                            completedPaymentStatusClass: 'bg-success-subtle text-success',
                                            deliveryType: 'Cash on delivery',
                                            date: 'Nov 12, 10:45 PM',
                                        },
                                        {
                                            orderId: '#3456',
                                            price: '$65',
                                            customerImg: '07.png',
                                            customerName: 'Andrew Carry',
                                            paymentStatus: 'Completed',
                                            paymentStatusClass: 'bg-success-subtle text-success',
                                            completedPaymentStatus: 'Failed',
                                            completedPaymentStatusClass: 'bg-danger-subtle text-danger',
                                            deliveryType: 'Cash on delivery',
                                            date: 'Nov 12, 10:45 PM',
                                        },
                                    ].map((order, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input className="form-check-input" type="checkbox" />
                                            </td>
                                            <td>
                                                <a href="javascript:;">{order.orderId}</a>
                                            </td>
                                            <td>{order.price}</td>
                                            <td>
                                                <a className="d-flex align-items-center gap-3" href="javascript:;">
                                                    <div className="customer-pic">
                                                        <img
                                                            src={`assets/images/avatars/${order.customerImg}`}
                                                            className="rounded-circle"
                                                            width="40"
                                                            height="40"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p className="mb-0 customer-name fw-bold">{order.customerName}</p>
                                                </a>
                                            </td>
                                            <td>
                                                <span className={`lable-table ${order.paymentStatusClass} rounded border font-text2 fw-bold`}>
                                                    {order.paymentStatus}
                                                    <i className={`bi ${order.paymentStatusClass.includes('success') ? 'bi-check2' : 'bi-x-lg'} ms-2`}></i>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`lable-table ${order.completedPaymentStatusClass} rounded border font-text2 fw-bold`}>
                                                    {order.completedPaymentStatus}
                                                    <i
                                                        className={`bi ${order.completedPaymentStatusClass.includes('success') ? 'bi-check2' : order.completedPaymentStatusClass.includes('primary') ? 'bi-check2-all' : 'bi-x-lg'
                                                            } ms-2`}
                                                    ></i>
                                                </span>
                                            </td>
                                            <td>{order.deliveryType}</td>
                                            <td>{order.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PageContent;

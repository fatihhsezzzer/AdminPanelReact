import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar-wrapper">
            <div className="sidebar-header">
                <div className="logo-icon">
                    <img src="assets/images/logo-icon.png" className="logo-img" alt="" />
                </div>
                <div className="logo-name flex-grow-1">
                    <h5 className="mb-0">Roksyn</h5>
                </div>
                <div className="sidebar-close">
                    <span className="material-symbols-outlined">close</span>
                </div>
            </div>
            <div className="sidebar-nav" data-simplebar="true">
                <ul className="metismenu" id="menu">
                    <li>
                        <a href="index.html">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">home</span>
                            </div>
                            <div className="menu-title">Dashboard</div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">apps</span>
                            </div>
                            <div className="menu-title">Application</div>
                        </a>
                        <ul>
                            <li>
                                <a href="app-emailbox.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Email
                                </a>
                            </li>
                            <li>
                                <a href="app-chat-box.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Chat Box
                                </a>
                            </li>
                            <li>
                                <a href="app-file-manager.html">
                                    <span className="material-symbols-outlined">arrow_right</span>File Manager
                                </a>
                            </li>
                            <li>
                                <a href="app-contact-list.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Contacts
                                </a>
                            </li>
                            <li>
                                <a href="app-to-do.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Todo List
                                </a>
                            </li>
                            <li>
                                <a href="app-invoice.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Invoice
                                </a>
                            </li>
                            <li>
                                <a href="app-fullcalender.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Calendar
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">UI Elements</li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">widgets</span>
                            </div>
                            <div className="menu-title">Widgets</div>
                        </a>
                        <ul>
                            <li>
                                <a href="widget-data.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Data Widget
                                </a>
                            </li>
                            <li>
                                <a href="widget-static.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Widget Static
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">shopping_cart</span>
                            </div>
                            <div className="menu-title">eCommerce</div>
                        </a>
                        <ul>
                            <li>
                                <a href="ecommerce-add-product.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Add Product
                                </a>
                            </li>
                            <li>
                                <a href="ecommerce-products.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Products
                                </a>
                            </li>
                            <li>
                                <a href="ecommerce-customers.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Customers
                                </a>
                            </li>
                            <li>
                                <a href="ecommerce-customer-details.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Customer Details
                                </a>
                            </li>
                            <li>
                                <a href="ecommerce-orders.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Orders
                                </a>
                            </li>
                            <li>
                                <a href="ecommerce-customer-details.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Order Details
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">redeem</span>
                            </div>
                            <div className="menu-title">Components</div>
                        </a>
                        <ul>
                            <li>
                                <a href="component-alerts.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Alerts
                                </a>
                            </li>
                            <li>
                                <a href="component-accordions.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Accordions
                                </a>
                            </li>
                            <li>
                                <a href="component-badges.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Badges
                                </a>
                            </li>
                            <li>
                                <a href="component-buttons.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Buttons
                                </a>
                            </li>
                            <li>
                                <a href="component-cards.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Cards
                                </a>
                            </li>
                            <li>
                                <a href="component-lightbox.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Lightbox
                                </a>
                            </li>
                            <li>
                                <a href="component-carousels.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Carousels
                                </a>
                            </li>
                            <li>
                                <a href="component-list-groups.html">
                                    <span className="material-symbols-outlined">arrow_right</span>List Groups
                                </a>
                            </li>
                            <li>
                                <a href="component-media-object.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Media Objects
                                </a>
                            </li>
                            <li>
                                <a href="component-modals.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Modals
                                </a>
                            </li>
                            <li>
                                <a href="component-navs-tabs.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Navs & Tabs
                                </a>
                            </li>
                            <li>
                                <a href="component-paginations.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Pagination
                                </a>
                            </li>
                            <li>
                                <a href="component-popovers-tooltips.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Popovers & Tooltips
                                </a>
                            </li>
                            <li>
                                <a href="component-progress-bars.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Progress
                                </a>
                            </li>
                            <li>
                                <a href="component-spinners.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Spinners
                                </a>
                            </li>
                            <li>
                                <a href="component-notifications.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Notifications
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">add_reaction</span>
                            </div>
                            <div className="menu-title">Icons</div>
                        </a>
                        <ul>
                            <li>
                                <a href="icons-line-icons.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Line Icons
                                </a>
                            </li>
                            <li>
                                <a href="icons-boxicons.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Boxicons
                                </a>
                            </li>
                            <li>
                                <a href="icons-feather-icons.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Feather Icons
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">Forms & Tables</li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">diamond</span>
                            </div>
                            <div className="menu-title">Forms</div>
                        </a>
                        <ul>
                            <li>
                                <a href="form-elements.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Form Elements
                                </a>
                            </li>
                            <li>
                                <a href="form-input-group.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Input Groups
                                </a>
                            </li>
                            <li>
                                <a href="form-radios-and-checkboxes.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Radios & Checkboxes
                                </a>
                            </li>
                            <li>
                                <a href="form-layouts.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Forms Layouts
                                </a>
                            </li>
                            <li>
                                <a href="form-validations.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Form Validation
                                </a>
                            </li>
                            <li>
                                <a href="form-wizard.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Form Wizard
                                </a>
                            </li>
                            <li>
                                <a href="form-file-upload.html">
                                    <span className="material-symbols-outlined">arrow_right</span>File Upload
                                </a>
                            </li>
                            <li>
                                <a href="form-date-time-pickes.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Date Pickers
                                </a>
                            </li>
                            <li>
                                <a href="form-select2.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Select2
                                </a>
                            </li>
                            <li>
                                <a href="form-repeater.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Form Repeater
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">backup_table</span>
                            </div>
                            <div className="menu-title">Tables</div>
                        </a>
                        <ul>
                            <li>
                                <a href="table-basic-table.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Basic Table
                                </a>
                            </li>
                            <li>
                                <a href="table-datatable.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Data Table
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">Pages</li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">lock_open</span>
                            </div>
                            <div className="menu-title">Authentication</div>
                        </a>
                        <ul>
                            <li>
                                <a className="has-arrow" href="javascript:;">
                                    <span className="material-symbols-outlined">arrow_right</span>Basic
                                </a>
                                <ul>
                                    <li>
                                        <a href="auth-basic-login.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Login
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-basic-register.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Register
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-basic-forgot-password.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Forgot Password
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-basic-reset-password.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Reset Password
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="javascript:;">
                                    <span className="material-symbols-outlined">arrow_right</span>Cover
                                </a>
                                <ul>
                                    <li>
                                        <a href="auth-cover-login.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Login
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-cover-reset-password.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Register
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-cover-forgot-password.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Forgot Password
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-cover-reset-password.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Reset Password
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="has-arrow" href="javascript:;">
                                    <span className="material-symbols-outlined">arrow_right</span>Boxed
                                </a>
                                <ul>
                                    <li>
                                        <a href="auth-boxed-login.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Login
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-boxed-register.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Register
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-boxed-forgot-password.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Forgot Password
                                        </a>
                                    </li>
                                    <li>
                                        <a href="auth-boxed-reset-password.html" target="_blank">
                                            <span className="material-symbols-outlined">arrow_right</span>Reset Password
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="user-profile.html">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">account_circle</span>
                            </div>
                            <div className="menu-title">User Profile</div>
                        </a>
                    </li>
                    <li>
                        <a href="timeline.html">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">hotel_class</span>
                            </div>
                            <div className="menu-title">Timeline</div>
                        </a>
                    </li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <div className="menu-title">Errors</div>
                        </a>
                        <ul>
                            <li>
                                <a href="pages-error-403.html" target="_blank">
                                    <span className="material-symbols-outlined">arrow_right</span>403 Error
                                </a>
                            </li>
                            <li>
                                <a href="pages-error-404.html" target="_blank">
                                    <span className="material-symbols-outlined">arrow_right</span>404 Error
                                </a>
                            </li>
                            <li>
                                <a href="pages-error-500.html" target="_blank">
                                    <span className="material-symbols-outlined">arrow_right</span>500 Error
                                </a>
                            </li>
                            <li>
                                <a href="pages-coming-soon.html" target="_blank">
                                    <span className="material-symbols-outlined">arrow_right</span>Coming Soon
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="faq.html">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div className="menu-title">FAQ</div>
                        </a>
                    </li>
                    <li>
                        <a href="pricing-table.html">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">currency_bitcoin</span>
                            </div>
                            <div className="menu-title">Pricing</div>
                        </a>
                    </li>
                    <li className="menu-label">Charts & Maps</li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">monitoring</span>
                            </div>
                            <div className="menu-title">Charts</div>
                        </a>
                        <ul>
                            <li>
                                <a href="charts-apex.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Apex
                                </a>
                            </li>
                            <li>
                                <a href="charts-chartjs.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Chartjs
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">distance</span>
                            </div>
                            <div className="menu-title">Maps</div>
                        </a>
                        <ul>
                            <li>
                                <a href="map-google-maps.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Google Maps
                                </a>
                            </li>
                            <li>
                                <a href="map-vector-maps.html">
                                    <span className="material-symbols-outlined">arrow_right</span>Vector Maps
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">Others</li>
                    <li>
                        <a className="has-arrow" href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">toc</span>
                            </div>
                            <div className="menu-title">Menu Levels</div>
                        </a>
                        <ul>
                            <li>
                                <a className="has-arrow" href="javascript:;">
                                    <span className="material-symbols-outlined">arrow_right</span>Level One
                                </a>
                                <ul>
                                    <li>
                                        <a className="has-arrow" href="javascript:;">
                                            <span className="material-symbols-outlined">arrow_right</span>Level Two
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="material-symbols-outlined">arrow_right</span>Level Three
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">receipt_long</span>
                            </div>
                            <div className="menu-title">Documentation</div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="parent-icon">
                                <span className="material-symbols-outlined">shop</span>
                            </div>
                            <div className="menu-title">Support</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-bottom dropdown dropup-center dropup">
                <div
                    className="dropdown-toggle d-flex align-items-center px-3 gap-3 w-100 h-100"
                    data-bs-toggle="dropdown"
                >
                    <div className="user-img">
                        <img src="assets/images/avatars/01.png" alt="" />
                    </div>
                    <div className="user-info">
                        <h5 className="mb-0 user-name">Jhon Maxwell</h5>
                        <p className="mb-0 user-designation">UI Engineer</p>
                    </div>
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                        <a className="dropdown-item" href="javascript:;">
                            <span className="material-symbols-outlined me-2">account_circle</span>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="javascript:;">
                            <span className="material-symbols-outlined me-2">tune</span>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="javascript:;">
                            <span className="material-symbols-outlined me-2">dashboard</span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="javascript:;">
                            <span className="material-symbols-outlined me-2">account_balance</span>
                            <span>Earnings</span>
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="javascript:;">
                            <span className="material-symbols-outlined me-2">cloud_download</span>
                            <span>Downloads</span>
                        </a>
                    </li>
                    <li>
                        <div className="dropdown-divider mb-0"></div>
                    </li>
                    <li>
                        <a className="dropdown-item" href="javascript:;">
                            <span className="material-symbols-outlined me-2">logout</span>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

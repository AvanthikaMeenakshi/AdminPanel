import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            title="Dashboard"
            route="/dashboard_default"
            icon="chart-bars"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Proxy Status"
            route="/proxy_status"
            icon="checkmark-circle"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Panel Protector"
            icon="heart"
            route="/panel_protection"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Refresh Requests"
            icon="sync"
            route="/refresh_requests"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="User Activity"
            icon="warning"
            route="/user_activity"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="URL check"
            route="/url_check"
            icon="redo"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="View"
            route="/view"
            icon="magnifier"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Credit Pending"
            route="/credit_pending"
            icon="flag"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Sample Proxy List"
            route="/proxy_list"
            icon="list"
            onClick={this.hideSidebar}
          />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Users" icon="users">
            <SidebarLink title="Active Users" route="/users/active" onClick={this.hideSidebar} />
            <SidebarLink title="Signed-up Users" route="/users/signedup" onClick={this.hideSidebar} />
            <SidebarLink title="All Users" route="/users/all" onClick={this.hideSidebar} />
            <SidebarLink title="Deactivated Users" route="/users/deactivated" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Tools" icon="cog">
            <SidebarLink title="Tools Heading 1" route="/tools" onClick={this.hideSidebar} />
            <SidebarLink title="Tools Heading 2" route="/tools" onClick={this.hideSidebar} />
            <SidebarLink title="Tools Heading 3" route="/tools" onClick={this.hideSidebar} />
            <SidebarLink title="Tools Heading 4" route="/tools" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Billing" icon="printer">
            <SidebarLink title="Billing 1" route="/billing" onClick={this.hideSidebar} />
            <SidebarLink title="Billing 2" route="/billing" onClick={this.hideSidebar} />
            <SidebarLink title="Billing 3" route="/billing" onClick={this.hideSidebar} />
            <SidebarLink title="Billing 4" route="/billing" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Clients" icon="user">
            <SidebarLink title="Clients 1" route="/clients" onClick={this.hideSidebar} />
            <SidebarLink title="Clients 2" route="/clients" onClick={this.hideSidebar} />
            <SidebarLink title="Clients 3" route="/clients" onClick={this.hideSidebar} />
            <SidebarLink title="Clients 4" route="/clients" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Products" icon="cart">
            <SidebarLink title="All Products" route="/products/all" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/log_in" />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;

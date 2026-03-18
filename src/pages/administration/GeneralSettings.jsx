import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const ClassicTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 py-[3px] text-[10px] border-t border-x border-slate-400 rounded-t-sm transition-colors whitespace-nowrap",
      active ? "bg-[#f0f0f0] -mb-[1px] z-10 border-b-transparent font-semibold" : "bg-[#e0e0e0] hover:bg-[#d8d8d8]"
    )}
  >
    {label}
  </button>
);

const Chk = ({ label, checked = false, className }) => (
  <label className={cn("flex items-center gap-1 cursor-pointer", className)}>
    <input type="checkbox" defaultChecked={checked} className="w-3 h-3" />
    <span className="text-[11px] text-slate-800">{label}</span>
  </label>
);

const FieldRow = ({ label, children, className }) => (
  <div className={cn("flex items-center mb-[3px]", className)}>
    <span className="text-[11px] text-slate-800 w-[220px] shrink-0">{label}</span>
    {children}
  </div>
);

const Sel = ({ options = [], value, className }) => (
  <select defaultValue={value} className={cn("bg-[#fff9c4] border border-slate-400 px-1 py-0.5 text-[11px] outline-none h-[20px] cursor-pointer", className)}>
    {options.map((o, i) => <option key={i}>{o}</option>)}
  </select>
);

const YellowBtn = ({ children, className }) => (
  <button className={cn("px-5 py-1 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[11px] text-slate-800 hover:brightness-95 rounded-[2px]", className)}>
    {children}
  </button>
);

/* ============ BP TAB ============ */
const BPTab = () => (
  <div className="p-3 space-y-4">
    {/* Top 3 sections */}
    <div className="flex gap-8">
      {/* Customer Activity Restrictions */}
      <div>
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Customer Activity Restrictions</span>
        <div className="flex gap-8">
          <div className="space-y-[2px]">
            <Chk label="Credit Limit" />
            <Chk label="Commitment Limit" />
            <div className="mt-2"><Chk label="Consider Deliveries Balance" /></div>
          </div>
          <div className="space-y-[2px]">
            <Chk label="A/R Invoice" />
            <Chk label="Delivery" />
            <Chk label="Sales Order" />
            <Chk label="Pick List" />
          </div>
        </div>
      </div>

      {/* Set Commission by */}
      <div>
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Set Commission by</span>
        <div className="space-y-[2px]">
          <Chk label="Sales Employees" />
          <Chk label="Items" />
          <Chk label="Customers" />
        </div>
      </div>

      {/* Approval Process */}
      <div>
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Approval Process</span>
        <div className="space-y-[2px]">
          <Chk label="Enable Approval Process" checked />
          <Chk label="Enable Approval Process in DI" checked />
          <Chk label="Enable Updating the Document Generated/Updated by Approval Process" checked />
          <Chk label="Enable Originator to Update the Document Draft in Pending/Approved Status" />
          <Chk label="Enable Authorizer to Update Document Draft in Pending Status" />
        </div>
      </div>
    </div>

    {/* Payment rows */}
    <div className="flex gap-8">
      <div className="space-y-[2px]">
        <FieldRow label="Default Payment Method for Customer"><Sel options={['']} className="w-[160px]" /></FieldRow>
        <FieldRow label="Default Payment Method for Vendor"><Sel options={['']} className="w-[160px]" /></FieldRow>
        <FieldRow label="Submit Credit Vouchers"><Sel options={['Automatically','Manually']} value="Automatically" className="w-[160px]" /></FieldRow>
        <FieldRow label="Default Dunning Term for Customer"><Sel options={['']} className="w-[160px]" /></FieldRow>
      </div>
      <div className="space-y-[2px]">
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Payment Terms Preferences</span>
        <FieldRow label="Default Payment Term for Customer">
          <span className="text-yellow-600 mr-1">⇨</span>
          <Sel options={['- Cash Basis -','Net 30','Net 60']} className="w-[160px]" />
        </FieldRow>
        <FieldRow label="Default Payment Term for Vendor">
          <span className="text-yellow-600 mr-1">⇨</span>
          <Sel options={['- Cash Basis -','Net 30','Net 60']} className="w-[160px]" />
        </FieldRow>
        <Chk label="Apply Changes in BP Fields to New Business Partners Only" className="mt-1" />
      </div>
    </div>

    <Chk label="Use Shipped Goods Account for Customer" />

    {/* Inactive BP checkboxes */}
    <div className="border-t border-slate-300 pt-3 space-y-[2px]">
      <Chk label="Display Inactive Business Partners in Reports" checked />
      <Chk label="Display Inactive Business Partners in Marketing Documents" checked />
      <Chk label="Display Inactive Contact Persons in Business Partner Master Data" checked />
    </div>

    <div className="space-y-[2px]">
      <Chk label="Allow Updating Address ID" checked />
      <Chk label="Enable Data Ownership" />
      <div className="flex items-center gap-4 ml-4">
        <span className="text-[11px] text-slate-800">Manage Data Ownership By</span>
        <Sel options={['Document Only','Business Partner and Document']} className="w-[180px]" />
      </div>
      <div className="ml-[380px] -mt-6">
        <Chk label="Set Default Price List in General Settings Instead of in Payment Terms" />
      </div>
    </div>

    {/* Blanket Agreements */}
    <div className="border-t border-slate-300 pt-3">
      <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Blanket Agreements</span>
      <div className="ml-3 space-y-[2px]">
        <Chk label="Allow Multiple Blanket Agreements for Same Period" />
        <Chk label="Enable Updating Unit Price/Planned Quantity/Planned Amount in Blanket Agreement with Linked Documents" />
      </div>
    </div>
  </div>
);

/* ============ BUDGET TAB ============ */
const BudgetTab = () => (
  <div className="p-4">
    <Chk label="Budget Initialization" checked className="mb-4" />

    <div className="ml-4">
      <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-3">
        For a Document that Deviates from the Budget:
      </span>

      {/* Deviation radio buttons */}
      <div className="flex items-center gap-12 mb-4 ml-2">
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="deviation" defaultChecked className="w-3 h-3" />
          <span className="text-[11px] text-slate-800">Block Deviation from Budget</span>
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="deviation" className="w-3 h-3" />
          <span className="text-[11px] text-slate-800">Warning</span>
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="deviation" className="w-3 h-3" />
          <span className="text-[11px] text-slate-800">Without Warning</span>
        </label>
      </div>

      {/* Annual/Monthly radio buttons */}
      <div className="ml-16 mb-4 space-y-[2px]">
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="budgetPeriod" defaultChecked className="w-3 h-3" />
          <span className="text-[11px] text-slate-800">For Annual Budget</span>
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="budgetPeriod" className="w-3 h-3" />
          <span className="text-[11px] text-slate-800">For Monthly Budget</span>
        </label>
      </div>

      {/* Document type checkboxes */}
      <div className="ml-16 space-y-[2px]">
        <Chk label="Purchase Request" checked />
        <Chk label="Purchase Orders" checked />
        <Chk label="Goods Receipt POs" checked />
        <Chk label="Accounting" checked />
      </div>
    </div>
  </div>
);

/* ============ SERVICES TAB ============ */
const ServicesTab = () => (
  <div className="p-3">
    <div className="flex gap-6">
      {/* LEFT COLUMN */}
      <div className="w-[340px] shrink-0">
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">At the Beginning of Each Session</span>
        <div className="space-y-[2px] ml-1">
          <Chk label="Perform Data Check" />
          <Chk label="Open Exchange Rates Table" />
          <Chk label="Display Recurring Postings on Execution" />
          <Chk label="Display Recurring Transactions on Execution" />
          <Chk label="Send Alert for Activities Scheduled for Today" />
          <Chk label="Display Inbox When New Messages Arrives" checked />
          <div className="flex items-center gap-1">
            <Chk label="Display Latest" checked />
            <input type="text" defaultValue="100" className="w-[35px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-center" />
            <span className="text-[11px] text-slate-800">Messages/Alerts</span>
          </div>
          <Chk label="Open Window for Credit Voucher Ref. Update" />
          <Chk label="Open Postdated Checks Window" />
          <Chk label="Display Worklist When New Task Arrives" />
        </div>

        <div className="mt-4 space-y-[2px]">
          <FieldRow label="Update Messages (Min.)"><input type="text" defaultValue="5" className="w-[60px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-right" /></FieldRow>
          <FieldRow label="Screen Locking Time (Min.)"><input type="text" defaultValue="30" className="w-[60px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-right" /></FieldRow>
          <FieldRow label="Open Postdated Credit Vouchers Window"><Sel options={['No','Yes']} className="w-[60px]" /></FieldRow>
        </div>

        {/* Alternative Keyboard Usage */}
        <div className="mt-6">
          <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Alternative Keyboard Usage</span>
          <div className="space-y-[2px] ml-1">
            <Chk label="Use Numeric Keypad ENTER Key as TAB Key" />
            <Chk label="Use Numeric Keypad Period Key as Separator on Display Tab" className="ml-3" />
            <Chk label="Enable Document Operations by Mouse Only (Such as Add, Update, OK)" className="ml-3" />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2">Single User Connection</span>
            <button className="px-2 py-0 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[11px] text-slate-800 rounded-[2px]">...</button>
          </div>
        </div>

        <div className="mt-3 space-y-[2px]">
          <Chk label="Enable Execution Audit Log for User-Defined Query or Query Generator" checked />
          <Chk label="Disable Warning Messages for Link-Type User-Defined Fields in Web Client" />
        </div>
      </div>

      {/* MIDDLE COLUMN */}
      <div className="w-[280px] shrink-0">
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Internet Definitions</span>
        <Chk label="Use Proxy Server for Web Connection" className="ml-1 mb-3" />

        <div className="mt-3">
          <span className="text-[11px] text-slate-800 block mb-1">Default E-Mail Method</span>
          <div className="ml-3 space-y-[1px]">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="emailMethod" defaultChecked className="w-3 h-3" />
              <span className="text-[11px] text-slate-800">SAP Business One Mailer</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="emailMethod" className="w-3 h-3" />
              <span className="text-[11px] text-slate-800">Outlook E-Mail</span>
            </label>
          </div>
          <span className="text-[11px] text-blue-600 underline cursor-pointer ml-3 mt-1 block">SAP Business One Microsoft 365 Integration</span>
        </div>

        <div className="mt-4">
          <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Telephone No.</span>
          <div className="space-y-[2px]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-[100px]">Area Code</span>
              <input type="text" className="flex-1 bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-[100px]">For External Line</span>
              <input type="text" className="flex-1 bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-[100px]">Map Service</span>
              <Sel options={['Google Map','Bing Maps']} className="flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-[100px]">History / Log</span>
              <input type="text" defaultValue="99" className="flex-1 bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1">
        <div className="space-y-[2px]">
          <Chk label="Enable Transaction Notification" checked />
          <Chk label="Enable Live Collaboration" checked />
          <Chk label="Enable Mailer Service" />
          <Chk label="Enable Alert Service" checked />
        </div>
        <div className="flex items-center gap-2 mt-2 mb-4">
          <span className="text-[11px] text-slate-800">Integration Framework Connection Timeout (Seconds)</span>
          <input type="text" defaultValue="30" className="w-[50px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-right" />
        </div>

        <Chk label="Enable Company Specific Mailer Configuration" className="mb-3" />

        <div className="space-y-[2px] ml-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[100px]">SMTP Server</span>
            <input type="text" className="w-[180px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[100px]">SMTP Port</span>
            <input type="text" className="w-[180px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[100px]">Authentication</span>
            <Sel options={['No Authentication','Basic','OAuth']} className="w-[180px]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[100px]">User Name</span>
            <input type="text" className="w-[180px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
          </div>
        </div>

        <div className="mt-6 space-y-[2px] ml-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[100px]">Password</span>
            <input type="password" className="w-[180px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[100px]">Encoding</span>
            <input type="text" defaultValue="English" className="w-[180px] bg-[#f0f0f0] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" readOnly />
          </div>
        </div>

        <div className="mt-3 ml-4 space-y-[2px]">
          <Chk label="Use TLS Encryption" />
          <Chk label="HTML Direction Right to Left" />
          <Chk label="Include Subject in Message Body" />
        </div>
      </div>
    </div>
  </div>
);

/* ============ DISPLAY TAB ============ */
const DisplayTab = () => (
  <div className="p-3">
    <div className="flex gap-10">
      {/* LEFT COLUMN */}
      <div className="w-[380px] shrink-0">
        <FieldRow label="Language"><Sel options={['English (United States)','English (UK)','German','French']} className="w-[180px]" /></FieldRow>

        <div className="mt-3 space-y-[2px]">
          <FieldRow label="Skin Style"><Sel options={['Golden Thread','Crystal Blue','Platinum']} className="w-[180px]" /></FieldRow>
          <FieldRow label="Color"><Sel options={['Classic','Dark','Light']} className="w-[180px]" /></FieldRow>
          <FieldRow label="Default Length UoM"><Sel options={['Metre','Centimetre','Inch','Foot']} className="w-[180px]" /></FieldRow>
          <FieldRow label="Default Weight UoM"><Sel options={['Gramme','Kilogramme','Pound']} className="w-[180px]" /></FieldRow>
          <FieldRow label="Time Format"><Sel options={['24H','12H']} className="w-[180px]" /></FieldRow>
          <FieldRow label="Date Format"><Sel options={['DD/MM/YY','MM/DD/YY','YY/MM/DD','DD/MM/YYYY']} className="w-[180px]" /></FieldRow>
          <FieldRow label="Date Separator"><input type="text" defaultValue="." className="w-[180px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" /></FieldRow>
        </div>

        <div className="mt-4 space-y-[2px]">
          <Chk label="Manage Company Time" />
          <FieldRow label="Ext. Image Processing"><Sel options={['Partial','Full','None']} className="w-[180px]" /></FieldRow>
          <FieldRow label="No. of Rows in 'List of Windows'"><input type="text" defaultValue="0" className="w-[180px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" /></FieldRow>
        </div>

        <div className="mt-4">
          <FieldRow label="Default UI Template"><Sel options={['']} className="w-[180px] bg-[#fff9c4]" /></FieldRow>
        </div>

        <div className="mt-4">
          <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Choose from List Preferences</span>
          <Chk label="Enable SAP Business One Suggest" checked />
          <FieldRow label="No. of Rows in Choose From List" className="mt-1"><Sel options={['10000','5000','1000','500']} className="w-[180px]" /></FieldRow>
        </div>

        <div className="mt-4">
          <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Search Engine</span>
          <div className="flex items-center gap-2">
            <input type="text" defaultValue="http://www.google.com/search?q={SapName} {FormName} {MessageString} site:sap.com" className="flex-1 bg-white border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
            <button className="px-3 py-0.5 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[10px] text-slate-800 rounded-[2px] whitespace-nowrap flex items-center gap-1">
              Default URL <span className="text-[8px]">▼</span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1">
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Decimal Places  (0..6)</span>
        <div className="space-y-[2px]">
          {[['Amounts','2'],['Prices','2'],['Rates','2'],['Quantities','2'],['Percent','2'],['Units','2'],['Decimals in Query','2']].map(([lbl, val]) => (
            <div key={lbl} className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-[140px]">{lbl}</span>
              <input type="text" defaultValue={val} className="w-[50px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-right" />
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[140px]">Decimal Separator</span>
            <input type="text" defaultValue="." className="w-[50px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-center" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[140px]">Thousands Sep.</span>
            <input type="text" defaultValue="," className="w-[50px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-center" />
          </div>
        </div>

        <div className="mt-4">
          <Chk label="Display Currency on the Right" />
        </div>

        <div className="mt-3">
          <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Exchange Rate Posting</span>
          <div className="ml-3 space-y-[1px]">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="exchangeRatePosting" defaultChecked className="w-3 h-3" />
              <span className="text-[11px] text-slate-800">Direct</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="exchangeRatePosting" className="w-3 h-3" />
              <span className="text-[11px] text-slate-800">Indirect</span>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <Chk label="Enable sidebar in windows to display recommendations and linked dashboards" />
        </div>

        <div className="mt-3">
          <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Search Preferences</span>
          <Chk label="Enable Case Sensitive Search" className="ml-3" />
        </div>
      </div>
    </div>
  </div>
);

/* ============ FONT & BKGD TAB ============ */
const FontBkgdTab = () => (
  <div className="p-4">
    <div className="flex gap-10">
      {/* LEFT: Font */}
      <div className="w-[420px] shrink-0">
        <FieldRow label="Font"><Sel options={['Tahoma','Arial','Segoe UI','Verdana','Calibri']} className="w-[220px] bg-[#fff9c4]" /></FieldRow>
        <div className="mt-3">
          <FieldRow label="Font Size"><Sel options={['8','9','10','11','12','14']} value="10" className="w-[220px]" /></FieldRow>
        </div>
        <div className="mt-4">
          <span className="text-[11px] text-slate-800 italic block mb-1">Preview</span>
          <div className="w-full h-[120px] bg-white border border-slate-400 flex items-center justify-center">
            <span className="text-[14px] text-slate-800" style={{ fontFamily: 'Tahoma, sans-serif' }}>AaBbYyZz - abcd</span>
          </div>
        </div>
        <div className="mt-3">
          <Chk label="Auto Resize User Forms" />
        </div>
      </div>

      {/* RIGHT: Background */}
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-[11px] text-slate-800 w-[100px]">Background</span>
            <Sel options={['- Without -','Custom Image']} className="flex-1" />
          </div>
          <YellowBtn>Browse...</YellowBtn>
        </div>
        <div className="mt-4">
          <span className="text-[11px] text-slate-800 italic block mb-1">Preview</span>
          <div className="w-full h-[120px] bg-white border border-slate-400"></div>
        </div>
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[100px]">Image Display</span>
            <Sel options={['Centralized','Stretched','Tiled']} className="w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ============ INVENTORY TAB ============ */
const InventoryTab = () => {
  const [invSubTab, setInvSubTab] = React.useState('Items');
  return (
    <div className="p-3">
      {/* Sub tabs */}
      <div className="flex items-end gap-[1px] border-b border-slate-400 mb-3">
        {['Items','Planning','Reporting'].map(t => (
          <button key={t} onClick={() => setInvSubTab(t)} className={cn(
            "px-4 py-[2px] text-[10px] border-t border-x border-slate-400 rounded-t-sm transition-colors",
            invSubTab === t ? "bg-[#f0f0f0] -mb-[1px] z-10 border-b-transparent font-semibold" : "bg-[#e8e8e8] hover:bg-[#ddd]"
          )}>{t}</button>
        ))}
      </div>

      {invSubTab === 'Items' && (
        <div className="flex gap-10">
          {/* LEFT */}
          <div className="flex-1">
            <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">and Batches</span>
            <FieldRow label="Management Method"><Sel options={['On Every Transaction','On Release Only','None']} className="w-[200px]" /></FieldRow>

            <div className="mt-3">
              <FieldRow label="Unique Serial Numbers by"><Sel options={['Serial Number','Manufacturer Serial Number']} className="w-[200px]" /></FieldRow>
            </div>

            <div className="mt-2">
              <span className="text-[11px] text-slate-800 block mb-1">Display Batch Quantities By</span>
              <div className="ml-3 flex items-center gap-6">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" name="batchQty" defaultChecked className="w-3 h-3" />
                  <span className="text-[11px] text-slate-800">Document Row UoM</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" name="batchQty" className="w-3 h-3" />
                  <span className="text-[11px] text-slate-800">Inventory UoM</span>
                </label>
              </div>
            </div>

            <div className="mt-3">
              <Chk label="Auto. Create Equipment Card" />
            </div>

            <div className="mt-2 space-y-[2px]">
              <FieldRow label="Basic Setting for Batch Status"><Sel options={['Released','Not Accessible','Locked']} className="w-[200px]" /></FieldRow>
              <Chk label="Block Multiple Receipts for Same Batch with Serial/Batch Valuation Method" className="mt-1" />
            </div>

            <div className="mt-3 space-y-[2px]">
              <FieldRow label="Default Warehouse"><Sel options={['General Warehouse','Main Warehouse']} className="w-[200px]" /></FieldRow>
              <FieldRow label="Set G/L Accounts By"><Sel options={['Item Group','Item Level','Warehouse']} className="w-[200px] bg-[#fff9c4]" /></FieldRow>
            </div>

            <div className="mt-2">
              <Chk label="Auto. Add All Warehouses to New and Existing Items" checked />
            </div>

            <div className="mt-4 space-y-[2px]">
              <Chk label="Withholding Tax" checked />
              <Chk label="Auto. Add All UoM Group Definitions to New and Existing Items" checked />
              <Chk label="Auto. Add All Package Definitions to New and Existing Items" checked />
              <Chk label="Open Item Master Data Instead of Bill of Materials of a BOM Item When Selecting Link Arrow" />
              <Chk label="Duplicate Bar Codes While Duplicating Items" checked />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-[220px] shrink-0">
            <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-1">Display Inactive Items In</span>
            <div className="space-y-[2px] ml-1">
              <Chk label="Reports" checked />
              <Chk label="Marketing Documents" checked />
            </div>
          </div>
        </div>
      )}


      {invSubTab === 'Planning' && (
        <div>
          <Chk label="Consume Forecast" checked className="mb-3" />
          <FieldRow label="Consumption Method"><Sel options={['Backward-Forward','Forward-Backward','Backward Only','Forward Only']} className="w-[200px]" /></FieldRow>
          <div className="mt-2 space-y-[2px]">
            <FieldRow label="Days Backward"><input type="text" defaultValue="7" className="w-[200px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" /></FieldRow>
            <FieldRow label="Days Forward"><input type="text" defaultValue="7" className="w-[200px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none" /></FieldRow>
          </div>
        </div>
      )}

      {invSubTab === 'Reporting' && (
        <div>
          <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Inventory Valuation Simulation Report</span>
          <div className="ml-3 space-y-[1px]">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="invValuation" defaultChecked className="w-3 h-3" />
              <span className="text-[11px] text-slate-800">Classic Valuation Report, Excluding Item Master Valuation</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="invValuation" className="w-3 h-3" />
              <span className="text-[11px] text-slate-800">Enhanced Valuation Report, Including All Valuation Methods</span>
            </label>
          </div>

          <div className="mt-4">
            <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Batches and Serials Trace Reports</span>
            <Chk label="Omit Disassembly Transactions to Improve Performance" checked className="ml-3" />
          </div>
        </div>
      )}
    </div>
  );
};

/* ============ PATH TAB ============ */
const BrowseBtn = () => (
  <button className="px-2 py-0 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[11px] text-slate-800 rounded-[2px] h-[20px] shrink-0">...</button>
);
const PathRow = ({ label, value = '', yellow = false }) => (
  <div className="flex items-center gap-2 mb-[3px]">
    <span className="text-[11px] text-slate-800 w-[200px] shrink-0">{label}</span>
    <input type="text" defaultValue={value} className={cn("flex-1 border border-slate-400 px-1 text-[11px] h-[20px] outline-none", yellow ? "bg-[#fff9c4]" : "bg-white")} />
    <BrowseBtn />
  </div>
);

const PathTab = () => (
  <div className="p-3">
    <span className="text-[11px] text-slate-800 block mb-1">Export Word and Excel File To</span>
    <div className="flex items-center gap-8 ml-3 mb-2">
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="exportTo" defaultChecked className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">Local Folder</span>
      </label>
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="exportTo" className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">OneDrive</span>
      </label>
    </div>

    <div className="ml-6 mb-2">
      <PathRow label="Microsoft Word Templates Folder" yellow />
      <PathRow label="Microsoft Excel Folder" />
    </div>

    <div className="flex items-start gap-4">
      <div className="flex-1 space-y-0">
        <PathRow label="Pictures Folder" value="C:\Users\Administrator\Videos\" />
        <div className="flex items-center gap-2 mb-[3px]">
          <span className="text-[11px] text-slate-800 w-[200px] shrink-0">Attachments Folder</span>
          <input type="text" defaultValue="\\192.168.109.6\b1_shf\Attachments\" className="flex-1 border border-slate-400 px-1 text-[11px] h-[20px] outline-none bg-white" />
          <BrowseBtn />
        </div>
        <PathRow label="Extensions Folder" />
        <PathRow label="Current Scanner" value="Cannot find suitable scanner" />
      </div>
      <button className="px-3 py-1 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[10px] text-slate-800 rounded-[2px] whitespace-nowrap mt-[22px] shrink-0">
        Refresh Paths in Documents
      </button>
    </div>

    <div className="mt-4">
      <PathRow label="XML File Folder" />
    </div>

    <div className="mt-2 flex items-center gap-2">
      <Chk label="Block Executable Attachments" />
      <BrowseBtn />
    </div>
  </div>
);

/* ============ RESOURCES TAB ============ */
const ResourcesTab = () => (
  <div className="p-4">
    <FieldRow label="Default Warehouse"><Sel options={['General Warehouse','Main Warehouse']} className="w-[200px]" /></FieldRow>
    <div className="mt-2">
      <Chk label="Auto Add All Warehouses to New Resources" checked />
    </div>
    <div className="mt-4">
      <span className="text-[11px] font-semibold text-slate-800 block mb-1">Default Capacity Period:</span>
      <div className="flex items-center gap-2 ml-1">
        <span className="text-[11px] text-slate-800">Start From Today Until</span>
        <Sel options={['Today','Yesterday','Last Week']} className="w-[100px]" />
        <span className="text-[11px] text-slate-800">+</span>
        <input type="text" defaultValue="1" className="w-[40px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-center" />
        <span className="text-[11px] text-slate-800">Months +</span>
        <input type="text" defaultValue="0" className="w-[40px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-center" />
        <span className="text-[11px] text-slate-800">Days</span>
      </div>
    </div>
  </div>
);

/* ============ CASH FLOW TAB ============ */
const CashFlowTab = () => (
  <div className="p-4">
    <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Assignment of Cash Flow Line Item</span>
    <div className="ml-3 space-y-[1px] mb-4">
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="cfAssignment" className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">Mandatory</span>
      </label>
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="cfAssignment" defaultChecked className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">Optional</span>
      </label>
    </div>

    <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Default Primary Form Cash Flow Line Item</span>
    <div className="space-y-[2px] ml-1 mb-4">
      <FieldRow label="Incoming Payment"><Sel options={['Payments for Invoices from Customers','Other Incoming']} className="w-[300px] bg-[#fff9c4]" /></FieldRow>
      <FieldRow label="Outgoing Payment"><Sel options={['Payments for Invoices to Suppliers','Other Outgoing']} className="w-[300px]" /></FieldRow>
    </div>

    <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Assignment in Transaction with All Relevant Cash Flow</span>
    <div className="ml-3 space-y-[1px]">
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="cfTransaction" defaultChecked className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">Ignore Without Warning</span>
      </label>
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="cfTransaction" className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">Warning Only</span>
      </label>
    </div>
  </div>
);

/* ============ COCKPIT TAB ============ */
const CockpitTab = () => (
  <div className="p-4">
    <div className="space-y-[1px]">
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="cockpitType" className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">Fiori-Style Cockpit</span>
      </label>
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="cockpitType" defaultChecked className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">Cockpit</span>
      </label>
      <label className="flex items-center gap-1 cursor-pointer">
        <input type="radio" name="cockpitType" className="w-3 h-3" />
        <span className="text-[11px] text-slate-800">None</span>
      </label>
    </div>
    <div className="flex items-center gap-2 mt-3">
      <span className="text-[11px] text-slate-800">Refresh KPIs and Pervasive Dashboards</span>
      <input type="text" defaultValue="300" className="w-[50px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-right" />
      <span className="text-[11px] text-slate-800">s</span>
    </div>
  </div>
);

/* ============ COST ACCOUNTING TAB ============ */
const CostAccountingTab = () => (
  <div className="p-4">
    <Chk label="Use Multidimensions" checked className="mb-2" />
    <div className="ml-4 mb-8">
      <span className="text-[11px] text-slate-800 block mb-1">Display Distribution Rules</span>
      <div className="space-y-[1px]">
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="distRules" defaultChecked className="w-3 h-3" />
          <span className="text-[11px] text-slate-800">In a Unified Column</span>
        </label>
        <label className="flex items-center gap-1 cursor-pointer">
          <input type="radio" name="distRules" className="w-3 h-3" />
          <span className="text-[11px] text-slate-800">In Separate Columns</span>
        </label>
      </div>
    </div>

    <div className="mt-8 mb-4">
      <span className="text-[11px] text-slate-800 block mb-2 italic">Specify how to post journal entry line without a distribution rule or project when G/L account is set up for cost accounting</span>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-800 w-[100px]">Distribution Rule</span>
          <BrowseBtn />
        </div>
        <FieldRow label="Project Code"><Sel options={['Without Warning','With Warning','Block']} className="w-[150px]" /></FieldRow>
      </div>
    </div>

    <div className="mt-8">
      <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Cost Accounting Adjustment Settings</span>
      <div className="space-y-[2px]">
        <FieldRow label="Default Series"><Sel options={['Primary','Secondary']} className="w-[200px]" /></FieldRow>
        <FieldRow label="Default G/L Account"><Sel options={['...']} className="w-[200px]" /></FieldRow>
      </div>
    </div>
  </div>
);

/* ============ PRICING TAB ============ */
const PricingTab = () => (
  <div className="p-4">
    <div className="flex gap-20">
      <div>
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Display Zero Price in Documents if Price Source is Based on Inactive Price Lists</span>
        <div className="ml-2 space-y-[2px]">
          <Chk label="Period and Volume Discounts" />
          <Chk label="Special Prices for Business Partners" />
          <Chk label="Price Lists" />
        </div>
      </div>
      <div>
        <span className="text-[11px] font-semibold text-slate-800 underline underline-offset-2 block mb-2">Display Inactive Price Lists In</span>
        <div className="ml-2 space-y-[2px]">
          <Chk label="Reports" />
          <Chk label="Sales, Purchasing and Inventory Documents" />
          <Chk label="Settings" />
        </div>
      </div>
    </div>

    <div className="mt-6">
      <Chk label="Remove Unpriced Items from Price List in Database" />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11px] text-slate-800">When UoM Conversion Rules Change</span>
        <Sel options={['Update UoM Prices Accordingly','Keep Existing Prices']} className="w-[220px] bg-[#fff9c4]" />
      </div>
      <div className="ml-6">
        <Chk label="Remove or Update UoM Prices Based on Last Purchase or Evaluated Price Lists" />
      </div>
    </div>

    <div className="mt-6">
      <Chk label="Effective Price Considers All Price Sources" />
    </div>
  </div>
);

/* ============ HIDE FUNCTIONS TAB ============ */
const HideFunctionsTab = () => (
  <div className="p-4">
    <p className="text-[11px] text-slate-800 mb-4">If your company does not use one or more of the following functions, you can hide them by selecting the respective option(s):</p>
    <div className="ml-2 space-y-2">
      <Chk label="Budget" />
      <Chk label="Payment Wizard" />
      <Chk label="Dunning Wizard" />
      <Chk label="Cost Accounting" />
      <Chk label="Serial Numbers and Batches" />
      <Chk label="Production" />
      <Chk label="MRP" />
      <Chk label="Units of Measure" />
    </div>
  </div>
);

/* ============ QR CODES TAB ============ */
const QRCodesTab = () => (
  <div className="p-4">
    <div className="flex items-center gap-10 mb-2">
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-800 w-[120px]">Version - Min. Size</span>
        <input type="text" defaultValue="1" className="w-[40px] bg-[#fff9c4] border border-slate-400 px-1 text-[11px] h-[18px] outline-none text-center" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-800">Max. Size</span>
        <input type="text" defaultValue="40" className="w-[100px] bg-white border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
      </div>
    </div>
    
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[11px] text-slate-800 w-[120px]">Scale (pixels per module)</span>
      <input type="text" defaultValue="10" className="w-[200px] bg-white border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
    </div>

    <div className="flex items-center gap-10 mb-2">
      <div className="flex items-center gap-2">
        <Chk label="QR Code Expiration" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-800">Expiration Days</span>
        <input type="text" defaultValue="10" className="w-[100px] bg-white border border-slate-400 px-1 text-[11px] h-[18px] outline-none" />
      </div>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-[11px] text-slate-800 w-[120px]">Correction Level</span>
      <Sel options={['Medium','Low','High','Quartile']} className="w-[200px]" />
    </div>
  </div>
);

/* ============ PLACEHOLDER TAB ============ */
const PlaceholderTab = ({ name }) => (
  <div className="p-6 flex items-center justify-center h-[300px]">
    <span className="text-[11px] text-slate-400 italic">{name} tab content will be implemented based on requirements.</span>
  </div>
);

/* ============ MAIN COMPONENT ============ */
export default function GeneralSettings() {
  const [activeTab, setActiveTab] = useState('BP');
  const tabs = ['BP','Budget','Services','Display','Font & Bkgd','Path','Inventory','Resources','Cash Flow','Cockpit','Cost Accounting','Pricing','Hide Functions','QR Codes'];

  return (
    <div className="flex flex-col bg-[#f0f0f0] min-h-full font-sans select-none">
      {/* Header */}
      <div className="h-[25px] flex items-center px-4 bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] border-b border-slate-400 shadow-sm">
        <span className="text-[12px] font-bold text-slate-800">General Settings</span>
      </div>
      <div className="h-[3px] w-full bg-[#f5a623]"></div>

      <div className="p-4 flex-1 flex flex-col">
        {/* Tabs row */}
        <div className="flex items-end gap-[1px] border-b border-slate-400 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <ClassicTab key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </div>

        {/* Content */}
        <div className="bg-[#f0f0f0] border-x border-b border-slate-400 flex-1 overflow-auto animate-in fade-in duration-200">
          {activeTab === 'BP' && <BPTab />}
          {activeTab === 'Budget' && <BudgetTab />}
          {activeTab === 'Services' && <ServicesTab />}
          {activeTab === 'Display' && <DisplayTab />}
          {activeTab === 'Font & Bkgd' && <FontBkgdTab />}
          {activeTab === 'Path' && <PathTab />}
          {activeTab === 'Inventory' && <InventoryTab />}
          {activeTab === 'Resources' && <ResourcesTab />}
          {activeTab === 'Cash Flow' && <CashFlowTab />}
          {activeTab === 'Cockpit' && <CockpitTab />}
          {activeTab === 'Cost Accounting' && <CostAccountingTab />}
          {activeTab === 'Pricing' && <PricingTab />}
          {activeTab === 'Hide Functions' && <HideFunctionsTab />}
          {activeTab === 'QR Codes' && <QRCodesTab />}
          {!['BP','Budget','Services','Display','Font & Bkgd','Path','Inventory','Resources','Cash Flow','Cockpit','Cost Accounting','Pricing','Hide Functions','QR Codes'].includes(activeTab) && <PlaceholderTab name={activeTab} />}
        </div>

        {/* Footer */}
        <div className="flex gap-2 pt-3">
          <YellowBtn>OK</YellowBtn>
          <YellowBtn>Cancel</YellowBtn>
        </div>
      </div>
    </div>
  );
}

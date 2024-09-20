import AllAccountsDropdown from "../../../../components/ui/dropdown/AllAccountsDropdown";
import ArrowDropdown from "../../../../components/ui/dropdown/ArrowDropdown";
import LinesDropdown from "../../../../components/ui/dropdown/LinesDropdown";
import ActionsDropdown from "../../../../components/ui/dropdown/ActionsDropdown";
import AllDropdown from "../../../../components/ui/dropdown/AllDropdown";

const accountOptions = [
  "All Accounts",
  "All Locked Accounts",
  "Converted Accounts",
  "Junk Accounts",
];

const actionOptions = [
  "Mass Delete",
  "Mass Update",
  "Mass Convert",
  "Manage Tags",
  "Drafts",
  "Mass Email",
  "Autoresponders",
  "Approve Leads",
  "Deduplicate Leads",
  "Add to Campaigns",
  "Create Client Script✨",
  "Export Leads",
];

const linesOptions = ["Option 1", "Option 2", "Option 3"];
const allOptions = ["Option 1", "Option 2", "Option 3"];
const arrowOptions = ["Option 1", "Option 2", "Option 3"];

const MeetingsActionBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-b border-gray-300 bg-white">
      <div className="flex items-center gap-3 -ml-6">
        <div></div>
        <div>
          <AllAccountsDropdown
            options={accountOptions}
            placeholder="All Meetings"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* Calculate Select */}
        <div>
          <LinesDropdown
            options={linesOptions}
            placeholderImage="/icons/options.svg"
          />
        </div>
        {/* Create Lead Button */}
        <div>
          <div className="flex items-center space-x-[3px]">
            {/* Create Lead Button */}
            <div>
              <button
                type="button"
                className="text-sm text-white px-4 py-1.5 rounded-l-md bg-blue-500 hover:bg-blue-500 transition-colors duration-150 w-full"
              >
                Create Meeting
              </button>
            </div>
            <div>
              <ArrowDropdown options={arrowOptions} />
            </div>
          </div>
        </div>
        <div>
          <ActionsDropdown options={actionOptions} placeholder="Actions" />
        </div>
        
      </div>
    </div>
  );
};

export default MeetingsActionBar;
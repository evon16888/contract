contract Policable {
    address public lawEnforcer; // account or multisig contract
    address public accountApprover; // account or multisig contract
    address public enforcementDestinationSetter; // people, who can reconfigure the destination account
    address public enforcementDestination; // Account where lawEnforcers can pull money to - e.g. some 

    function Policable() {
        lawEnforcer = msg.sender;
    }

// Modifiers only to allow actions by appointed accounts

    modifier onlyLawEnforcer {
        if (msg.sender != lawEnforcer) throw;
        _
    }

    modifier onlyAccountApprover {
        if (msg.sender != accountApprover) throw;
        _
    }

    modifier onlyEnforcementDestinationSetter {
        if (msg.sender != enforcementDestinationSetter) throw;
        _
    }


// Functions to change the appointed accounts/committees

    function transferLawEnforcer(address newLawEnforcer)
        onlyLawEnforcer
    {
        lawEnforcer = newLawEnforcer;
    }

    function transferAccountApprover(address newAccountApprover)
        onlyAccountApprover
    {
        accountApprover = newAccountApprover;
    }

    function transferEnforcementDestinationSetter(address newEnforcementDestinationSetter)
        onlyEnforcementDestinationSetter
    {
        enforcementDestinationSetter = newEnforcementDestinationSetter;
    }

// The appointed committee can set the destination account for enforcements by lawEnforcer

    function setEnforcementDestination(address target)
        onlyEnforcementDestinationSetter
    {
	if (target != 0) {
        	enforcementDestination = target;
	}
    }

}
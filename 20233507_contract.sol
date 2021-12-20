// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.7;
// an ERC20 token is a token, like BTC or ETH, except it runs on the Ethereum chain

interface InterfaceForERC20 {
    
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    
    function allowance(address owner, address spender) external view returns (uint256);
    
    function transfer(address recipient, uint256 amount) external returns (bool);
    
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function getSymbol() external view returns (string memory);
    function getName() external view returns (string memory);
    function getDecimals() external view returns (uint8);

}


contract preeToken is InterfaceForERC20 {
    
    string public symbol;
    string public name;
    uint8 public decimals;
    uint public _totalSupply;
    address public tokenOwner;
    
    mapping(address => uint) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    
    constructor() public {
        tokenOwner = msg.sender;
        symbol = "PREE1.2";
        name = "PREE1.2 fixed supply token";
        decimals = 18;
         
        _totalSupply = 1000000 * 10**uint(decimals);
        _balances[tokenOwner] = _totalSupply;
        
        emit Transfer(address(0), tokenOwner, _totalSupply);
    }
    
    function totalSupply() public view override returns (uint256) {
        return _totalSupply;
    }
    
    function balanceOf(address account) public view override returns (uint256) {
        return _balances[account];
    }
    
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }
    
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        
        address sender = msg.sender;
        _balances[sender] = _balances[sender] - amount;
        _balances[recipient] = _balances[recipient] + amount;
        
        emit Transfer(sender, recipient, amount);
        return true;
    }
    
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address approver = msg.sender;
        
        _allowances[approver][spender] = amount;
        emit Approval(approver, spender, amount);
        return true;
    }
    
    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {
        _balances[sender] = _balances[sender] - amount;
        _balances[recipient] = _balances[recipient] + amount;
        emit Transfer(sender, recipient, amount);
        
        _allowances[sender][recipient] = amount;
        emit Approval(sender, recipient, amount);
        return true;
    }
     function getName() public view virtual override returns (string memory) {
        return name;
    }
    function getSymbol() public view virtual override returns (string memory) {
        return symbol;
    }
    function getDecimals() public view virtual override returns (uint8) {
        return 18;
    }
}
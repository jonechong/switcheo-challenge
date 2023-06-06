pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract BalanceReader {
    function getBalances(address wallet, address[] memory tokens) public view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](tokens.length);
        
        for (uint i = 0; i < tokens.length; i++) {
            balances[i] = IERC20(tokens[i]).balanceOf(wallet);
        }
        
        return balances;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FitnessScore {

    uint256 public myScore;

    // Constructor (empty but helps Remix avoid gas estimation bugs)
    constructor() {
        myScore = 0;
    }

    function setScore(uint256 _score) public {
        myScore = _score;
    }
}


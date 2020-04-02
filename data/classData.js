// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var classArray = [
    {
      f_name: "Tristan",
      l_name: "Wilson",
      email: "my-man@gmail.com",
      userID: "65464131658",
      phoneNumber: "000-000-0000"
    },
    {
      f_name: "Pheonix",
      l_name: "Wilson",
      email: "my-man@gmail.com",
      userID: "65464131657",
      phoneNumber: "000-000-0000"
    },
    {
      f_name: "Hope",
      l_name: "Wilson",
      email: "my-man@gmail.com",
      userID: "65464131656",
      phoneNumber: "000-000-0000"
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = classArray;
  
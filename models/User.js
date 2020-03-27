const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  phone: String,
  address_number: String,
  address_street: String,
  unit_number: String,
  city: String,
  zip: String,
  state: String,
  dob: String,
  emergency_contact: {
    f_name: String,
    l_name: String,
    phone: String,
    email: String
  },
  covid: Boolean,
  organ_donor: Boolean,
  allergies: {
    allergy_1: {
      allergy: String,
      medication: String,
      prescribing_php: {
        name: String,
        phone: String,
        email: String
      },
    },
    allergy_2: {
      allergy: String,
      medication: String,
      prescribing_php: {
        name: String,
        phone: String,
        email: String
      },
    },
    allergy_3: {
      allergy: String,
      medication: String,
      prescribing_php: {
        name: String,
        phone: String,
        email: String
      },
    },
    allergy_4: {
      allergy: String,
      medication: String,
      prescribing_php: {
        name: String,
        phone: String,
        email: String
      },
    },
    allergy_5: {
      allergy: String,
      medication: String,
      prescribing_php: {
        name: String,
        phone: String,
        email: String
      },
    }
  },
  needs: {
    food: Boolean,
    general_necessities: Boolean,
    help: {
      emergency: Boolean,
      type: {

        medical: Boolean,
        fire: Boolean,
        law_enforcement: Boolean
      }
    }
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

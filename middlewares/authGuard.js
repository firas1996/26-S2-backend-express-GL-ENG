exports.protectorMW = async (req, res, next) => {
  try {
    let token;
    // 1) nthabtou si el user 3andou token walé ( logged in or not ! )
    // 2) nthabtou si el token is valid or not !
    // 3) nthabtou ken el user moula el token mizel mawjoud walé
    // 4) nthabtou ken el token tsan3et 9bal wala ba3d e5er pass update !

    next();
  } catch (error) {
    res.status(400).json({
      message: "Fail !!",
      error: error,
    });
  }
};

exports.checkRoleMW = async (params) => {};

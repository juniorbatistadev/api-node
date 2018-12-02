const Friend = require('../model/Friend');


/*permite a los usuarios A y B ver el estatus de la solicitud. Si (por ejemplo), el usuario A envia la solicitud
*este verá "solicitado" mientras que el usuario B verá que tiene solicitudes pendientes
*/
<<<<<<< HEAD
=======

>>>>>>> 60e4bf8015067ab45fa72512f81586f403c27aa9
const docA = await Friend.findOneAndUpdate(
    { requester: UserA, receiver: UserB },
    { $set: { status: 1 }},
    { upsert: true, new: true }
)
const docB = await Friend.findOneAndUpdate(
    { receiver: UserA, requester: UserB },
    { $set: { status: 2 }},
    { upsert: true, new: true }
)
const updateUserA = await User.findOneAndUpdate(
    { _id: UserA },
    { $push: { friends: docA._id }}
)
const updateUserB = await User.findOneAndUpdate(
    { _id: UserB },
    { $push: { friends: docB._id }}
)



// Si el usuario B acepta la solicitud
Friend.findOneAndUpdate(
    { requester: UserA, receiver: UserB },
    { $set: { status: 3 }}
)
Friend.findOneAndUpdate(
    { receiver: UserA, requester: UserB },
    { $set: { status: 3 }}
)



//Si el usuario B rechaza la solicitud
const docA = await Friend.findOneAndRemove(
    { requester: UserA, receiver: UserB }
)
const docB = await Friend.findOneAndRemove(
    { receiver: UserA, requester: UserB }
)
const updateUserA = await User.findOneAndUpdate(
    { _id: UserA },
    { $pull: { friends: docA._id }}
)
const updateUserB = await User.findOneAndUpdate(
    { _id: UserB },
    { $pull: { friends: docB._id }}
)

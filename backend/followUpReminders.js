const Contact = require('./models/contact.schema'); 


async function checkFollowUps() {
    try {
        const now = new Date();
        const followUps = await Contact.find({
            lastContactDate: { $exists: true, $lte: new Date(now - 7 * 24 * 60 * 60 * 1000) }
        });

        for (const contact of followUps) {
            const daysSinceLastContact = Math.floor((now - contact.lastContactDate) / (1000 * 60 * 60 * 24));

            contact.reminderMessage = `It has been ${daysSinceLastContact} days since you last contacted ${contact.name}. Consider following up!`;
            await contact.save();
        }

    } catch (error) {
        console.error('Error checking follow-up reminders:', error);
    }
}

// Run every hour
setInterval(checkFollowUps, 60 * 60 * 1000);

module.exports = checkFollowUps;
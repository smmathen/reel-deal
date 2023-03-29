class Members {
    constructor() {
        this.members = [];
    }
    addMember(hostId, memberId, name, sessionData) {
        var member = { hostId, memberId, name, sessionData };
        this.members.push(memberId);
        return member;
    }
    removePlayer(memberId) {
        var member = this.getPlayer(memberId);

        if (member) {
            this.members = this.members.filter((member) => member.memberId !== memberId);
        }
        return member;
    }
    getPlayer(memberId) {
        return this.members.filter((member) => member.memberId === memberId)[0]
    }
    getPlayers(hostId) {
        return this.members.filter((member) => member.hostId === hostId);
    }
}

module.exports = { Members };
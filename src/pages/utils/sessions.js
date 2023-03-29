class Sessions {
    constructor() {
        this.games = [];
    }
    addSession(pin, hostId, sessionLive, sessionData) {
        var session = { pin, hostId, sessionLive, sessionData };
        this.sessions.push(session);
        return session;
    }
    removeSession(hostId) {
        var session = this.getSession(hostId);

        if (session) {
            this.sessions = this.sessions.filter((session) => session.hostId !== hostId);
        }
        return session;
    }
    getSession(hostId) {
        return this.sessions.filter((session) => session.hostId === hostId)[0]
    }
}

module.exports = { Sessions };
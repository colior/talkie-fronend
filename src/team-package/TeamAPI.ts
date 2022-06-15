import {MemberId, Team, TeamId, TeamMember} from "./types";
import {members, team} from "./fakeData";
import _ from 'lodash';

export interface TeamAPI {
    getTeam: (teamId: TeamId) => Team;
    getMember: (memberId: MemberId) => TeamMember | undefined;
    // getMemberTeams : (memberId: MemberId) => TeamMember['teams'];
}

export const teamAPI: TeamAPI = {
    getTeam: teamId => {
        return team;
    },
    getMember: memberId => {
        return _.get(members, memberId);
    },
}

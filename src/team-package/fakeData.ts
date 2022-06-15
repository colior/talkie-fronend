import {Team, TeamMember} from "./types";

export const currentUser = 'mem1';

export const team: Team = {
    id: 'team1',
    title: 'best team ever',
    members: ['mem1', 'mem2'],
}

const member1: TeamMember = {
    id: 'mem1',
    status: 'available',
    teams: ['team1']
}
const member2: TeamMember = {
    id: 'mem2',
    status: 'notAvailable',
    teams: ['team1']
}

export const members = {
    'mem1': member1,
    'mem2': member2
}

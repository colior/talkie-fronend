export type Status = 'available' | 'notAvailable';



export type TeamId = string
export type MemberId = string

export type TeamMember = {
    id: MemberId;
    status: Status;
    teams: TeamId[];
}

export type Team = {
    id: string;
    title: string;
    members: MemberId[];
}

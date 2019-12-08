const pad2 = (n: number) => n.toString().padStart(2, '0')

export default class Clock {
    hours = 0
    minutes = 0
    private time: Date

    constructor(hour: number, minute = 0) {
        this.time = new Date(2000, 0, 0, hour, minute)
        this.hours = this.time.getHours()
        this.minutes = this.time.getMinutes()
    }

    addMinutes(minutes: number): Clock {
        return new Clock(this.time.getHours(), this.time.getMinutes() + minutes)
    }

    subMinutes(minutes: number): Clock {
        return new Clock(this.time.getHours(), this.time.getMinutes() - minutes)
    }

    compareClocks(secondClock: Clock): boolean {
        if (
            this.hours === secondClock.hours &&
            this.minutes === secondClock.minutes
        ) {
            return true
        }
        return false
    }

    getTime(): string {
        const timeStr: string = pad2(this.hours) + ':' + pad2(this.minutes)
        return timeStr
    }
}
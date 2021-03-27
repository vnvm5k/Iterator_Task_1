export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    const check = this.members.has(member);
    if (!check) {
      this.members.add(member);
    } else {
      throw new Error('Выбранный персонаж уже в команде!');
    }
  }

  addAll(...member) {
    member.forEach((el) => {
      const subCheck = this.members.has(el);
      if (!subCheck) {
        this.members.add(el);
      }
    });
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    let current = 0;
    const members = this.toArray();

    return {
      next() {
        if (current < members.length) {
          const value = members[current];
          current += 1;

          return {
            done: false,
            value,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}

class RulesLevelEnum {
	const = {
		'UNAUTHORIZED': 0,
		'DEFAULT_USER': 1,
		'MODERATOR': 2,
		'ADMIN': 3,
	};

	constructor(ruleLevel) {
		this.ruleLevel = ruleLevel;
	}
}
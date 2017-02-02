var items = {
	label: 'Node Label',
	items: [
		{
			label: 'Child Node Label',
			items: [
				{
					label: 'Child Node Label',
					items: [
						{
							label: 'Child Node Label',
							items: [
								{
									label: 'Leaf Node Label',
								}
							]
						},
						{
							label: 'Child Node Label',
							items: [
								{
									label: 'Child Node Label'
								},
								{
									label: 'Child Node Label',
								}
							]
						},
						{
							label: 'Leaf Node Label'
						}
					]
				}
			]
		},
		{
			label: 'Leaf Node Label'
		},
		{
			label: 'Child Node Label',
			items: [
				{
					label: 'Child Node Label'
				},
				{
					label: 'Child Node Label',
				}
			]
		}
	]
};

module.exports = items;
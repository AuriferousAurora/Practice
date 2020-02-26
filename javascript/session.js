const obj = {
	"ProgramName": "SMART",
	"Database": "SMART40",
	"SessionToken": "051c8028077849a691ea1fcb46bdcbf2",
	"LastAccessed": "2020-02-13T10:54:57.115034-06:00",
	"Version": "1.0.0.0",
	"User": {
		"TableName": "[tblSecurityUsers]",
		"GUID": "d559a51e8c9840e1928bd9e8d0097d74",
		"IsAllowed": true,
		"DisplayName": "Administrator",
		"SQLUser": "admin",
		"FacilityMenuDisplay": 1,
		"PasswordDate": "2018-12-21T08:45:21.773",
		"AddComputer": false,
		"RowError": "",
		"RowState": 16,
		"Table": [
			{
				"GUID": "d559a51e8c9840e1928bd9e8d0097d74",
				"Is Allowed": true,
				"Display Name": "Administrator",
				"SQL User": "admin",
				"Facility Menu Display": 1,
				"Password Date": "2018-12-21T08:45:21.773",
				"Add Computer": false
			}
		],
		"ItemArray": [
			"d559a51e8c9840e1928bd9e8d0097d74",
			true,
			"Administrator",
			"admin",
			1,
			"2018-12-21T08:45:21.773",
			false
		],
		"HasErrors": false
	},
	"Computer": {
		"TableName": "[tblSecurityComputers]",
		"GUID": "b773d7446014466a9c29acf846ac4247",
		"ComputerName": "WIN10-KYLE",
		"LastUser": "d559a51e8c9840e1928bd9e8d0097d74",
		"LastLogin": "2020-02-13T10:25:36.037",
		"Description": "Added 20200210",
		"MACAddress": "1831BF4421A4",
		"Version": "1.0.0.0",
		"IsAllowed": true,
		"RowError": "",
		"RowState": 2,
		"Table": [
			{
				"GUID": "b773d7446014466a9c29acf846ac4247",
				"Computer Name": "WIN10-KYLE",
				"Last User": "d559a51e8c9840e1928bd9e8d0097d74",
				"Last Login": "2020-02-13T10:25:36.037",
				"Description": "Added 20200210",
				"MAC Address": "1831BF4421A4",
				"Version": "1.0.0.0",
				"Is Allowed": true
			}
		],
		"ItemArray": [
			"b773d7446014466a9c29acf846ac4247",
			"WIN10-KYLE",
			"d559a51e8c9840e1928bd9e8d0097d74",
			"2020-02-13T10:25:36.037",
			"Added 20200210",
			"1831BF4421A4",
			"1.0.0.0",
			true
		],
		"HasErrors": false
	},
	"Settings": {
		"Password Age": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "28605293D48F41579838EAA700E33799",
			"UsersGUID": null,
			"Key": "Password Age",
			"Type": "System.Int32",
			"Value": "0",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"28605293D48F41579838EAA700E33799",
				null,
				"Password Age",
				"System.Int32",
				"0"
			],
			"HasErrors": false
		},
		"Password Complexity (1-4)": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
			"UsersGUID": null,
			"Key": "Password Complexity (1-4)",
			"Type": "System.Int32",
			"Value": "2",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"3A674E0E09244293BD247D8D43C9EFD2",
				null,
				"Password Complexity (1-4)",
				"System.Int32",
				"2"
			],
			"HasErrors": false
		},
		"Base URL": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
			"UsersGUID": null,
			"Key": "Base URL",
			"Type": "System.String",
			"Value": "https://smart4-receivables-web.conveyor.cloud/",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"56EDE15501FC42448DF074C1EFF33CAB",
				null,
				"Base URL",
				"System.String",
				"https://smart4-receivables-web.conveyor.cloud/"
			],
			"HasErrors": false
		},
		"CC Tokenization Email Valid Hours": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
			"UsersGUID": null,
			"Key": "CC Tokenization Email Valid Hours",
			"Type": "System.Int32",
			"Value": "24",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"7C8305C0AD7E4C9EA6595A12BBDD331C",
				null,
				"CC Tokenization Email Valid Hours",
				"System.Int32",
				"24"
			],
			"HasErrors": false
		},
		"Parking Company Name": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
			"UsersGUID": null,
			"Key": "Parking Company Name",
			"Type": "System.String",
			"Value": "Robbins Parking",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"A37F93B7A86C4B1BAD04CD6C8682F5D2",
				null,
				"Parking Company Name",
				"System.String",
				"Robbins Parking"
			],
			"HasErrors": false
		},
		"Password Minimum Length": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
			"UsersGUID": null,
			"Key": "Password Minimum Length",
			"Type": "System.Int32",
			"Value": "8",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"C08CFCB33C5343FFAD7B0AC17D236BB1",
				null,
				"Password Minimum Length",
				"System.Int32",
				"8"
			],
			"HasErrors": false
		},
		"Attachment Path": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "C2018A042164483D976EF8F277113157",
			"UsersGUID": null,
			"Key": "Attachment Path",
			"Type": "System.String",
			"Value": "C:\\Test.txt",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"C2018A042164483D976EF8F277113157",
				null,
				"Attachment Path",
				"System.String",
				"C:\\Test.txt"
			],
			"HasErrors": false
		},
		"Email Invoice Message": {
			"TableName": "[tblSecuritySettings]",
			"GUID": "D9676F625C74497E80B6BC19356FD31D",
			"UsersGUID": null,
			"Key": "Email Invoice Message",
			"Type": "System.String",
			"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "28605293D48F41579838EAA700E33799",
					"Users GUID": null,
					"Key": "Password Age",
					"Type": "System.Int32",
					"Value": "0"
				},
				{
					"GUID": "3A674E0E09244293BD247D8D43C9EFD2",
					"Users GUID": null,
					"Key": "Password Complexity (1-4)",
					"Type": "System.Int32",
					"Value": "2"
				},
				{
					"GUID": "56EDE15501FC42448DF074C1EFF33CAB",
					"Users GUID": null,
					"Key": "Base URL",
					"Type": "System.String",
					"Value": "https://smart4-receivables-web.conveyor.cloud/"
				},
				{
					"GUID": "7C8305C0AD7E4C9EA6595A12BBDD331C",
					"Users GUID": null,
					"Key": "CC Tokenization Email Valid Hours",
					"Type": "System.Int32",
					"Value": "24"
				},
				{
					"GUID": "A37F93B7A86C4B1BAD04CD6C8682F5D2",
					"Users GUID": null,
					"Key": "Parking Company Name",
					"Type": "System.String",
					"Value": "Robbins Parking"
				},
				{
					"GUID": "C08CFCB33C5343FFAD7B0AC17D236BB1",
					"Users GUID": null,
					"Key": "Password Minimum Length",
					"Type": "System.Int32",
					"Value": "8"
				},
				{
					"GUID": "C2018A042164483D976EF8F277113157",
					"Users GUID": null,
					"Key": "Attachment Path",
					"Type": "System.String",
					"Value": "C:\\Test.txt"
				},
				{
					"GUID": "D9676F625C74497E80B6BC19356FD31D",
					"Users GUID": null,
					"Key": "Email Invoice Message",
					"Type": "System.String",
					"Value": "Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
				}
			],
			"ItemArray": [
				"D9676F625C74497E80B6BC19356FD31D",
				null,
				"Email Invoice Message",
				"System.String",
				"Dear Valued Customer,\r\n\r\nYour current invoice is attached. Please note that payments are due on the first of the month. Please note that if you are on automatic payments, no action is needed.  Your payment will automatically process on the first of the month.\r\n\r\nYour business is important to us.  If you have any questions or concerns, please don’t hesitate to call our office at the number listed on the invoice.\r\n\r\nSincerely,\r\nRobbins Parking"
			],
			"HasErrors": false
		}
	},
	"Permissions": {
		"95a6f1aa5a35ea781ea730e250bbb23e": {
			"TableName": "[tblSecurityPermissions]",
			"GroupsGUID": null,
			"SecurablesGUID": "95a6f1aa5a35ea781ea730e250bbb23e",
			"CanCreate": true,
			"CanRead": true,
			"CanUpdate": true,
			"CanDelete": true,
			"RowError": "",
			"RowState": 4,
			"Table": [
				{
					"Groups GUID": null,
					"Securables GUID": "95a6f1aa5a35ea781ea730e250bbb23e",
					"Can Create": true,
					"Can Read": true,
					"Can Update": true,
					"Can Delete": true
				}
			],
			"ItemArray": [
				null,
				"95a6f1aa5a35ea781ea730e250bbb23e",
				true,
				true,
				true,
				true
			],
			"HasErrors": false
		}
	},
	"Memberships": {
		"50f01c1c5e2a40e2a26a30f405d00f5a": {
			"TableName": "[tblSecurityMemberships]",
			"UsersGUID": "d559a51e8c9840e1928bd9e8d0097d74",
			"GroupsGUID": "50f01c1c5e2a40e2a26a30f405d00f5a",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "50f01c1c5e2a40e2a26a30f405d00f5a"
				},
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "D0887EBA2463481BB27A20BF535EB3A6"
				},
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "ec53c218fede49a49ac4d4909714691c"
				}
			],
			"ItemArray": [
				"d559a51e8c9840e1928bd9e8d0097d74",
				"50f01c1c5e2a40e2a26a30f405d00f5a"
			],
			"HasErrors": false
		},
		"D0887EBA2463481BB27A20BF535EB3A6": {
			"TableName": "[tblSecurityMemberships]",
			"UsersGUID": "d559a51e8c9840e1928bd9e8d0097d74",
			"GroupsGUID": "D0887EBA2463481BB27A20BF535EB3A6",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "50f01c1c5e2a40e2a26a30f405d00f5a"
				},
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "D0887EBA2463481BB27A20BF535EB3A6"
				},
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "ec53c218fede49a49ac4d4909714691c"
				}
			],
			"ItemArray": [
				"d559a51e8c9840e1928bd9e8d0097d74",
				"D0887EBA2463481BB27A20BF535EB3A6"
			],
			"HasErrors": false
		},
		"ec53c218fede49a49ac4d4909714691c": {
			"TableName": "[tblSecurityMemberships]",
			"UsersGUID": "d559a51e8c9840e1928bd9e8d0097d74",
			"GroupsGUID": "ec53c218fede49a49ac4d4909714691c",
			"RowError": "",
			"RowState": 4,
			"Table": [
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "50f01c1c5e2a40e2a26a30f405d00f5a"
				},
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "D0887EBA2463481BB27A20BF535EB3A6"
				},
				{
					"Users GUID": "d559a51e8c9840e1928bd9e8d0097d74",
					"Groups GUID": "ec53c218fede49a49ac4d4909714691c"
				}
			],
			"ItemArray": [
				"d559a51e8c9840e1928bd9e8d0097d74",
				"ec53c218fede49a49ac4d4909714691c"
			],
			"HasErrors": false
		}
	},
	"Groups": {
		"50f01c1c5e2a40e2a26a30f405d00f5a": {
			"TableName": "[tblSecurityGroups]",
			"GUID": "50f01c1c5e2a40e2a26a30f405d00f5a",
			"IsAllowed": true,
			"DisplayName": "User - System Admin",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "50f01c1c5e2a40e2a26a30f405d00f5a",
					"Is Allowed": true,
					"Display Name": "User - System Admin"
				}
			],
			"ItemArray": [
				"50f01c1c5e2a40e2a26a30f405d00f5a",
				true,
				"User - System Admin"
			],
			"HasErrors": false
		},
		"D0887EBA2463481BB27A20BF535EB3A6": {
			"TableName": "[tblSecurityGroups]",
			"GUID": "D0887EBA2463481BB27A20BF535EB3A6",
			"IsAllowed": true,
			"DisplayName": "User - Lot Activation",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "D0887EBA2463481BB27A20BF535EB3A6",
					"Is Allowed": true,
					"Display Name": "User - Lot Activation"
				}
			],
			"ItemArray": [
				"D0887EBA2463481BB27A20BF535EB3A6",
				true,
				"User - Lot Activation"
			],
			"HasErrors": false
		},
		"ec53c218fede49a49ac4d4909714691c": {
			"TableName": "[tblSecurityGroups]",
			"GUID": "ec53c218fede49a49ac4d4909714691c",
			"IsAllowed": true,
			"DisplayName": "Everyone",
			"RowError": "",
			"RowState": 2,
			"Table": [
				{
					"GUID": "ec53c218fede49a49ac4d4909714691c",
					"Is Allowed": true,
					"Display Name": "Everyone"
				}
			],
			"ItemArray": [
				"ec53c218fede49a49ac4d4909714691c",
				true,
				"Everyone"
			],
			"HasErrors": false
		}
	},
	"UserLogin": "admin",
	"VPN": "",
	"ServerName": "Platinum Development",
	"ReportsPath": "",
	"InvoicePath": "",
	"Country": "United States",
	"CreditCardType": "CreditCard",
	"InvoiceForm": "InvCurrent-CAN.rpt",
	"InvoiceMessageLine": "Thank you for parking with Platinum Parking.",
	"IifFolder": "",
	"IifListFile": "",
	"InvoiceNowSetting": 1,
	"DataTransferFileSaveLocation": "C:\\Users\\kyle\\Desktop",
	"InactiveLots": {
		"CityNames": [
			{
				"FacCity": "Nanaimo"
			},
			{
				"FacCity": "Victoria"
			}
		],
		"FacilityNames": []
	},
	"CitiesAndLots": {
		"CityNames": [
			{
				"FacCity": "Nanaimo"
			},
			{
				"FacCity": "Victoria"
			}
		],
		"FacilityNames": [
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "004",
				"FacNum": "50-004",
				"FacName": "VIC MEDICAL DENTAL OVER FLOW",
				"FacNumName": "50-004 VIC MEDICAL DENTAL OVER FLOW"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "005",
				"FacNum": "50-005",
				"FacName": "ROTHERHAM BUILDING",
				"FacNumName": "50-005 ROTHERHAM BUILDING"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "008",
				"FacNum": "50-008",
				"FacName": "518 FISGARD STREET",
				"FacNumName": "50-008 518 FISGARD STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "009",
				"FacNum": "50-009",
				"FacName": "LANGLEY PARKADE",
				"FacNumName": "50-009 LANGLEY PARKADE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "014",
				"FacNum": "50-014",
				"FacName": "744 BROUGHTON STREET",
				"FacNumName": "50-014 744 BROUGHTON STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "016",
				"FacNum": "50-016",
				"FacName": "CFAX",
				"FacNumName": "50-016 CFAX"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "021",
				"FacNum": "50-021",
				"FacName": "845 CALEDONIA",
				"FacNumName": "50-021 845 CALEDONIA"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "022",
				"FacNum": "50-022",
				"FacName": "821 CALEDONIA AVENUE",
				"FacNumName": "50-022 821 CALEDONIA AVENUE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "023",
				"FacNum": "50-023",
				"FacName": "COOK ST MEDICAL",
				"FacNumName": "50-023 COOK ST MEDICAL"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "030",
				"FacNum": "50-030",
				"FacName": "FISHERMANS WHARF",
				"FacNumName": "50-030 FISHERMANS WHARF"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "049",
				"FacNum": "50-049",
				"FacName": "PRICES ALARM",
				"FacNumName": "50-049 PRICES ALARM"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "050",
				"FacNum": "50-050",
				"FacName": "LONDON DRUGS",
				"FacNumName": "50-050 LONDON DRUGS"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "051",
				"FacNum": "50-051",
				"FacName": "OGDEN POINT",
				"FacNumName": "50-051 OGDEN POINT"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "053",
				"FacNum": "50-053",
				"FacName": "1830 OAK BAY AVENUE",
				"FacNumName": "50-053 1830 OAK BAY AVENUE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "054",
				"FacNum": "50-054",
				"FacName": "MARKET SQUARE",
				"FacNumName": "50-054 MARKET SQUARE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "061",
				"FacNum": "50-061",
				"FacName": "203 QUEBEC STREET",
				"FacNumName": "50-061 203 QUEBEC STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "064",
				"FacNum": "50-064",
				"FacName": "1618 STORE STREET",
				"FacNumName": "50-064 1618 STORE STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "070",
				"FacNum": "50-070",
				"FacName": "MONTE VANTON",
				"FacNumName": "50-070 MONTE VANTON"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "074",
				"FacNum": "50-074",
				"FacName": "1705 STORE STREET",
				"FacNumName": "50-074 1705 STORE STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "080",
				"FacNum": "50-080",
				"FacName": "945 ROCKLAND AVENUE",
				"FacNumName": "50-080 945 ROCKLAND AVENUE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "083",
				"FacNum": "50-083",
				"FacName": "848 CORMORANT STREET",
				"FacNumName": "50-083 848 CORMORANT STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "087",
				"FacNum": "50-087",
				"FacName": "1045 MEARS STREET",
				"FacNumName": "50-087 1045 MEARS STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "089",
				"FacNum": "50-089",
				"FacName": "2606 DOUGLAS STREET",
				"FacNumName": "50-089 2606 DOUGLAS STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "092",
				"FacNum": "50-092",
				"FacName": "RICHMOND MEDICAL CENTRE",
				"FacNumName": "50-092 RICHMOND MEDICAL CENTRE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "094",
				"FacNum": "50-094",
				"FacName": "1113 JOHNSON STREET",
				"FacNumName": "50-094 1113 JOHNSON STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "095",
				"FacNum": "50-095",
				"FacName": "1107 JOHNSON STREET",
				"FacNumName": "50-095 1107 JOHNSON STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "098",
				"FacNum": "50-098",
				"FacName": "630 HERALD ST",
				"FacNumName": "50-098 630 HERALD ST"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "112",
				"FacNum": "50-112",
				"FacName": "VICTORIA CONFERENCE CENTRE",
				"FacNumName": "50-112 VICTORIA CONFERENCE CENTRE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "142",
				"FacNum": "50-142",
				"FacName": "BROUGHTON SQUARE",
				"FacNumName": "50-142 BROUGHTON SQUARE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "143",
				"FacNum": "50-143",
				"FacName": "Harbour Centre-910 Government",
				"FacNumName": "50-143 Harbour Centre-910 Government"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "144",
				"FacNum": "50-144",
				"FacName": "1947 COOK STREET",
				"FacNumName": "50-144 1947 COOK STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "160",
				"FacNum": "50-160",
				"FacName": "ST ANN ACADEMY",
				"FacNumName": "50-160 ST ANN ACADEMY"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "161",
				"FacNum": "50-161",
				"FacName": "1950 Foul Bay",
				"FacNumName": "50-161 1950 Foul Bay"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "166",
				"FacNum": "50-166",
				"FacName": "844 Courtney Street",
				"FacNumName": "50-166 844 Courtney Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "170",
				"FacNum": "50-170",
				"FacName": "Van Isle Marina",
				"FacNumName": "50-170 Van Isle Marina"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "171",
				"FacNum": "50-171",
				"FacName": "GOLDS GYM",
				"FacNumName": "50-171 GOLDS GYM"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "172",
				"FacNum": "50-172",
				"FacName": "VICTORIA AIRPORT PARKING",
				"FacNumName": "50-172 VICTORIA AIRPORT PARKING"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "181",
				"FacNum": "50-181",
				"FacName": "624 630 Frances Avenue",
				"FacNumName": "50-181 624 630 Frances Avenue"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "188",
				"FacNum": "50-188",
				"FacName": "9762 Third Street",
				"FacNumName": "50-188 9762 Third Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "190",
				"FacNum": "50-190",
				"FacName": "3020 Douglas",
				"FacNumName": "50-190 3020 Douglas"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "191",
				"FacNum": "50-191",
				"FacName": "700 Douglas",
				"FacNumName": "50-191 700 Douglas"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "192",
				"FacNum": "50-192",
				"FacName": "2915 Douglas Street",
				"FacNumName": "50-192 2915 Douglas Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "195",
				"FacNum": "50-195",
				"FacName": "620 Finlayson",
				"FacNumName": "50-195 620 Finlayson"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "200",
				"FacNum": "50-200",
				"FacName": "618 (624) FISGARD STREET",
				"FacNumName": "50-200 618 (624) FISGARD STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "202",
				"FacNum": "50-202",
				"FacName": "GOLDEN CITY",
				"FacNumName": "50-202 GOLDEN CITY"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "209",
				"FacNum": "50-209",
				"FacName": "2230 Government St",
				"FacNumName": "50-209 2230 Government St"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "211",
				"FacNum": "50-211",
				"FacName": "520 FORT STREET",
				"FacNumName": "50-211 520 FORT STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "212",
				"FacNum": "50-212",
				"FacName": "Tillicum Mall",
				"FacNumName": "50-212 Tillicum Mall"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "214",
				"FacNum": "50-214",
				"FacName": "HELIPORT-OGDEN POINT",
				"FacNumName": "50-214 HELIPORT-OGDEN POINT"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "215",
				"FacNum": "50-215",
				"FacName": "THETIS LAKE",
				"FacNumName": "50-215 THETIS LAKE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "217",
				"FacNum": "50-217",
				"FacName": "Coast Victoria Hotel",
				"FacNumName": "50-217 Coast Victoria Hotel"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "219",
				"FacNum": "50-219",
				"FacName": "MINGS",
				"FacNumName": "50-219 MINGS"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "220",
				"FacNum": "50-220",
				"FacName": "254 BELLEVILLE TERMINAL",
				"FacNumName": "50-220 254 BELLEVILLE TERMINAL"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "221",
				"FacNum": "50-221",
				"FacName": "1035 JOHNSON STREET",
				"FacNumName": "50-221 1035 JOHNSON STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "222",
				"FacNum": "50-222",
				"FacName": "VICTORIA BAY CENTRE",
				"FacNumName": "50-222 VICTORIA BAY CENTRE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "224",
				"FacNum": "50-224",
				"FacName": "345 Harbour Road",
				"FacNumName": "50-224 345 Harbour Road"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "225",
				"FacNum": "50-225",
				"FacName": "DaVinci Centre",
				"FacNumName": "50-225 DaVinci Centre"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "227",
				"FacNum": "50-227",
				"FacName": "Sussex - 1001 Douglas St",
				"FacNumName": "50-227 Sussex - 1001 Douglas St"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "228",
				"FacNum": "50-228",
				"FacName": "1009 Mason Street",
				"FacNumName": "50-228 1009 Mason Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "230",
				"FacNum": "50-230",
				"FacName": "ARC BLDG",
				"FacNumName": "50-230 ARC BLDG"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "231",
				"FacNum": "50-231",
				"FacName": "626 McKenzie Avenue",
				"FacNumName": "50-231 626 McKenzie Avenue"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "237",
				"FacNum": "50-237",
				"FacName": "SELKIRK BUILDINGS - UNDERGRND",
				"FacNumName": "50-237 SELKIRK BUILDINGS - UNDERGRND"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "243",
				"FacNum": "50-243",
				"FacName": "1990 FORT STREET",
				"FacNumName": "50-243 1990 FORT STREET"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "257",
				"FacNum": "50-257",
				"FacName": "Robbins Parking Services Ltd",
				"FacNumName": "50-257 Robbins Parking Services Ltd"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "268",
				"FacNum": "50-268",
				"FacName": "9835 Sea Port Place",
				"FacNumName": "50-268 9835 Sea Port Place"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "278",
				"FacNum": "50-278",
				"FacName": "910 Johnson St",
				"FacNumName": "50-278 910 Johnson St"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "284",
				"FacNum": "50-284",
				"FacName": "2251 Cadboro Bay",
				"FacNumName": "50-284 2251 Cadboro Bay"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "291",
				"FacNum": "50-291",
				"FacName": "1003 View Street",
				"FacNumName": "50-291 1003 View Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "294",
				"FacNum": "50-294",
				"FacName": "Swartz Bay Ferry Term - LT",
				"FacNumName": "50-294 Swartz Bay Ferry Term - LT"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "298",
				"FacNum": "50-298",
				"FacName": "Victoria Marriott",
				"FacNumName": "50-298 Victoria Marriott"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "606",
				"FacNum": "50-606",
				"FacName": "415 DUNEDIN",
				"FacNumName": "50-606 415 DUNEDIN"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "610",
				"FacNum": "50-610",
				"FacName": "1925 Blanshard",
				"FacNumName": "50-610 1925 Blanshard"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "612",
				"FacNum": "50-612",
				"FacName": "Sooke Pot Holes",
				"FacNumName": "50-612 Sooke Pot Holes"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "620",
				"FacNum": "50-620",
				"FacName": "424 Powell St",
				"FacNumName": "50-620 424 Powell St"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "631",
				"FacNum": "50-631",
				"FacName": "777 Royal Oak Drive",
				"FacNumName": "50-631 777 Royal Oak Drive"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "634",
				"FacNum": "50-634",
				"FacName": "1095 MCKENZIE AVE",
				"FacNumName": "50-634 1095 MCKENZIE AVE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "637",
				"FacNum": "50-637",
				"FacName": "1551 CEDAR HILL X ROAD",
				"FacNumName": "50-637 1551 CEDAR HILL X ROAD"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "644",
				"FacNum": "50-644",
				"FacName": "707 Courtney Street",
				"FacNumName": "50-644 707 Courtney Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "654",
				"FacNum": "50-654",
				"FacName": "3440 SAANICH ROAD",
				"FacNumName": "50-654 3440 SAANICH ROAD"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "655",
				"FacNum": "50-655",
				"FacName": "9741 Second Street",
				"FacNumName": "50-655 9741 Second Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "661",
				"FacNum": "50-661",
				"FacName": "17 Huron Street",
				"FacNumName": "50-661 17 Huron Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "668",
				"FacNum": "50-668",
				"FacName": "1128 Vancouver Street",
				"FacNumName": "50-668 1128 Vancouver Street"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "670",
				"FacNum": "50-670",
				"FacName": "1205 PANDORA AVENUE",
				"FacNumName": "50-670 1205 PANDORA AVENUE"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "671",
				"FacNum": "50-671",
				"FacName": "932 Pandora Avenue",
				"FacNumName": "50-671 932 Pandora Avenue"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "675",
				"FacNum": "50-675",
				"FacName": "1905-1911 Sooke",
				"FacNumName": "50-675 1905-1911 Sooke"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "684",
				"FacNum": "50-684",
				"FacName": "385WaterfrontCrescent",
				"FacNumName": "50-684 385WaterfrontCrescent"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "691",
				"FacNum": "50-691",
				"FacName": "3814 Carey Road",
				"FacNumName": "50-691 3814 Carey Road"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "695",
				"FacNum": "50-695",
				"FacName": "613 Pandora",
				"FacNumName": "50-695 613 Pandora"
			},
			{
				"FacCity": "Victoria",
				"CityNum": "50",
				"DisplayNum": "999",
				"FacNum": "50-999",
				"FacName": "MISC LOT",
				"FacNumName": "50-999 MISC LOT"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "386",
				"FacNum": "54-386",
				"FacName": "300 Comox Rd",
				"FacNumName": "54-386 300 Comox Rd"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "398",
				"FacNum": "54-398",
				"FacName": "BC FERRIES",
				"FacNumName": "54-398 BC FERRIES"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "403",
				"FacNum": "54-403",
				"FacName": "8 ESPLANADE",
				"FacNumName": "54-403 8 ESPLANADE"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "407",
				"FacNum": "54-407",
				"FacName": "North & Easthom Roads",
				"FacNumName": "54-407 North & Easthom Roads"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "408",
				"FacNum": "54-408",
				"FacName": "100 Trunk Road",
				"FacNumName": "54-408 100 Trunk Road"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "411",
				"FacNum": "54-411",
				"FacName": "65 Chapel Street",
				"FacNumName": "54-411 65 Chapel Street"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "415",
				"FacNum": "54-415",
				"FacName": "Departure Bay Ferry - LT",
				"FacNumName": "54-415 Departure Bay Ferry - LT"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "417",
				"FacNum": "54-417",
				"FacName": "Duke Point Ferry - LT",
				"FacNumName": "54-417 Duke Point Ferry - LT"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "430",
				"FacNum": "54-430",
				"FacName": "395 TERMINAL AVE",
				"FacNumName": "54-430 395 TERMINAL AVE"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "444",
				"FacNum": "54-444",
				"FacName": "650 South Terminal Avenue",
				"FacNumName": "54-444 650 South Terminal Avenue"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "446",
				"FacNum": "54-446",
				"FacName": "Howard Johnson Hotel",
				"FacNumName": "54-446 Howard Johnson Hotel"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "448",
				"FacNum": "54-448",
				"FacName": "420 SELBY STREET",
				"FacNumName": "54-448 420 SELBY STREET"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "452",
				"FacNum": "54-452",
				"FacName": "55 Comox Road",
				"FacNumName": "54-452 55 Comox Road"
			},
			{
				"FacCity": "Nanaimo",
				"CityNum": "54",
				"DisplayNum": "460",
				"FacNum": "54-460",
				"FacName": "Roberts Reach Road",
				"FacNumName": "54-460 Roberts Reach Road"
			}
		]
	},
	"Cities": [
		{
			"FacCity": "Nanaimo"
		},
		{
			"FacCity": "Victoria"
		}
	],
	"LotsComboDisplayColumn": "FacNumName",
	"LotsComboValueColumn": "FacNum",
	"Lots": [
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "004",
			"FacNum": "50-004",
			"FacName": "VIC MEDICAL DENTAL OVER FLOW",
			"FacNumName": "50-004 VIC MEDICAL DENTAL OVER FLOW"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "005",
			"FacNum": "50-005",
			"FacName": "ROTHERHAM BUILDING",
			"FacNumName": "50-005 ROTHERHAM BUILDING"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "008",
			"FacNum": "50-008",
			"FacName": "518 FISGARD STREET",
			"FacNumName": "50-008 518 FISGARD STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "009",
			"FacNum": "50-009",
			"FacName": "LANGLEY PARKADE",
			"FacNumName": "50-009 LANGLEY PARKADE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "014",
			"FacNum": "50-014",
			"FacName": "744 BROUGHTON STREET",
			"FacNumName": "50-014 744 BROUGHTON STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "016",
			"FacNum": "50-016",
			"FacName": "CFAX",
			"FacNumName": "50-016 CFAX"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "021",
			"FacNum": "50-021",
			"FacName": "845 CALEDONIA",
			"FacNumName": "50-021 845 CALEDONIA"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "022",
			"FacNum": "50-022",
			"FacName": "821 CALEDONIA AVENUE",
			"FacNumName": "50-022 821 CALEDONIA AVENUE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "023",
			"FacNum": "50-023",
			"FacName": "COOK ST MEDICAL",
			"FacNumName": "50-023 COOK ST MEDICAL"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "030",
			"FacNum": "50-030",
			"FacName": "FISHERMANS WHARF",
			"FacNumName": "50-030 FISHERMANS WHARF"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "049",
			"FacNum": "50-049",
			"FacName": "PRICES ALARM",
			"FacNumName": "50-049 PRICES ALARM"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "050",
			"FacNum": "50-050",
			"FacName": "LONDON DRUGS",
			"FacNumName": "50-050 LONDON DRUGS"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "051",
			"FacNum": "50-051",
			"FacName": "OGDEN POINT",
			"FacNumName": "50-051 OGDEN POINT"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "053",
			"FacNum": "50-053",
			"FacName": "1830 OAK BAY AVENUE",
			"FacNumName": "50-053 1830 OAK BAY AVENUE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "054",
			"FacNum": "50-054",
			"FacName": "MARKET SQUARE",
			"FacNumName": "50-054 MARKET SQUARE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "061",
			"FacNum": "50-061",
			"FacName": "203 QUEBEC STREET",
			"FacNumName": "50-061 203 QUEBEC STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "064",
			"FacNum": "50-064",
			"FacName": "1618 STORE STREET",
			"FacNumName": "50-064 1618 STORE STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "070",
			"FacNum": "50-070",
			"FacName": "MONTE VANTON",
			"FacNumName": "50-070 MONTE VANTON"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "074",
			"FacNum": "50-074",
			"FacName": "1705 STORE STREET",
			"FacNumName": "50-074 1705 STORE STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "080",
			"FacNum": "50-080",
			"FacName": "945 ROCKLAND AVENUE",
			"FacNumName": "50-080 945 ROCKLAND AVENUE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "083",
			"FacNum": "50-083",
			"FacName": "848 CORMORANT STREET",
			"FacNumName": "50-083 848 CORMORANT STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "087",
			"FacNum": "50-087",
			"FacName": "1045 MEARS STREET",
			"FacNumName": "50-087 1045 MEARS STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "089",
			"FacNum": "50-089",
			"FacName": "2606 DOUGLAS STREET",
			"FacNumName": "50-089 2606 DOUGLAS STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "092",
			"FacNum": "50-092",
			"FacName": "RICHMOND MEDICAL CENTRE",
			"FacNumName": "50-092 RICHMOND MEDICAL CENTRE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "094",
			"FacNum": "50-094",
			"FacName": "1113 JOHNSON STREET",
			"FacNumName": "50-094 1113 JOHNSON STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "095",
			"FacNum": "50-095",
			"FacName": "1107 JOHNSON STREET",
			"FacNumName": "50-095 1107 JOHNSON STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "098",
			"FacNum": "50-098",
			"FacName": "630 HERALD ST",
			"FacNumName": "50-098 630 HERALD ST"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "112",
			"FacNum": "50-112",
			"FacName": "VICTORIA CONFERENCE CENTRE",
			"FacNumName": "50-112 VICTORIA CONFERENCE CENTRE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "142",
			"FacNum": "50-142",
			"FacName": "BROUGHTON SQUARE",
			"FacNumName": "50-142 BROUGHTON SQUARE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "143",
			"FacNum": "50-143",
			"FacName": "Harbour Centre-910 Government",
			"FacNumName": "50-143 Harbour Centre-910 Government"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "144",
			"FacNum": "50-144",
			"FacName": "1947 COOK STREET",
			"FacNumName": "50-144 1947 COOK STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "160",
			"FacNum": "50-160",
			"FacName": "ST ANN ACADEMY",
			"FacNumName": "50-160 ST ANN ACADEMY"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "161",
			"FacNum": "50-161",
			"FacName": "1950 Foul Bay",
			"FacNumName": "50-161 1950 Foul Bay"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "166",
			"FacNum": "50-166",
			"FacName": "844 Courtney Street",
			"FacNumName": "50-166 844 Courtney Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "170",
			"FacNum": "50-170",
			"FacName": "Van Isle Marina",
			"FacNumName": "50-170 Van Isle Marina"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "171",
			"FacNum": "50-171",
			"FacName": "GOLDS GYM",
			"FacNumName": "50-171 GOLDS GYM"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "172",
			"FacNum": "50-172",
			"FacName": "VICTORIA AIRPORT PARKING",
			"FacNumName": "50-172 VICTORIA AIRPORT PARKING"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "181",
			"FacNum": "50-181",
			"FacName": "624 630 Frances Avenue",
			"FacNumName": "50-181 624 630 Frances Avenue"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "188",
			"FacNum": "50-188",
			"FacName": "9762 Third Street",
			"FacNumName": "50-188 9762 Third Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "190",
			"FacNum": "50-190",
			"FacName": "3020 Douglas",
			"FacNumName": "50-190 3020 Douglas"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "191",
			"FacNum": "50-191",
			"FacName": "700 Douglas",
			"FacNumName": "50-191 700 Douglas"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "192",
			"FacNum": "50-192",
			"FacName": "2915 Douglas Street",
			"FacNumName": "50-192 2915 Douglas Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "195",
			"FacNum": "50-195",
			"FacName": "620 Finlayson",
			"FacNumName": "50-195 620 Finlayson"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "200",
			"FacNum": "50-200",
			"FacName": "618 (624) FISGARD STREET",
			"FacNumName": "50-200 618 (624) FISGARD STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "202",
			"FacNum": "50-202",
			"FacName": "GOLDEN CITY",
			"FacNumName": "50-202 GOLDEN CITY"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "209",
			"FacNum": "50-209",
			"FacName": "2230 Government St",
			"FacNumName": "50-209 2230 Government St"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "211",
			"FacNum": "50-211",
			"FacName": "520 FORT STREET",
			"FacNumName": "50-211 520 FORT STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "212",
			"FacNum": "50-212",
			"FacName": "Tillicum Mall",
			"FacNumName": "50-212 Tillicum Mall"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "214",
			"FacNum": "50-214",
			"FacName": "HELIPORT-OGDEN POINT",
			"FacNumName": "50-214 HELIPORT-OGDEN POINT"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "215",
			"FacNum": "50-215",
			"FacName": "THETIS LAKE",
			"FacNumName": "50-215 THETIS LAKE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "217",
			"FacNum": "50-217",
			"FacName": "Coast Victoria Hotel",
			"FacNumName": "50-217 Coast Victoria Hotel"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "219",
			"FacNum": "50-219",
			"FacName": "MINGS",
			"FacNumName": "50-219 MINGS"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "220",
			"FacNum": "50-220",
			"FacName": "254 BELLEVILLE TERMINAL",
			"FacNumName": "50-220 254 BELLEVILLE TERMINAL"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "221",
			"FacNum": "50-221",
			"FacName": "1035 JOHNSON STREET",
			"FacNumName": "50-221 1035 JOHNSON STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "222",
			"FacNum": "50-222",
			"FacName": "VICTORIA BAY CENTRE",
			"FacNumName": "50-222 VICTORIA BAY CENTRE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "224",
			"FacNum": "50-224",
			"FacName": "345 Harbour Road",
			"FacNumName": "50-224 345 Harbour Road"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "225",
			"FacNum": "50-225",
			"FacName": "DaVinci Centre",
			"FacNumName": "50-225 DaVinci Centre"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "227",
			"FacNum": "50-227",
			"FacName": "Sussex - 1001 Douglas St",
			"FacNumName": "50-227 Sussex - 1001 Douglas St"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "228",
			"FacNum": "50-228",
			"FacName": "1009 Mason Street",
			"FacNumName": "50-228 1009 Mason Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "230",
			"FacNum": "50-230",
			"FacName": "ARC BLDG",
			"FacNumName": "50-230 ARC BLDG"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "231",
			"FacNum": "50-231",
			"FacName": "626 McKenzie Avenue",
			"FacNumName": "50-231 626 McKenzie Avenue"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "237",
			"FacNum": "50-237",
			"FacName": "SELKIRK BUILDINGS - UNDERGRND",
			"FacNumName": "50-237 SELKIRK BUILDINGS - UNDERGRND"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "243",
			"FacNum": "50-243",
			"FacName": "1990 FORT STREET",
			"FacNumName": "50-243 1990 FORT STREET"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "257",
			"FacNum": "50-257",
			"FacName": "Robbins Parking Services Ltd",
			"FacNumName": "50-257 Robbins Parking Services Ltd"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "268",
			"FacNum": "50-268",
			"FacName": "9835 Sea Port Place",
			"FacNumName": "50-268 9835 Sea Port Place"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "278",
			"FacNum": "50-278",
			"FacName": "910 Johnson St",
			"FacNumName": "50-278 910 Johnson St"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "284",
			"FacNum": "50-284",
			"FacName": "2251 Cadboro Bay",
			"FacNumName": "50-284 2251 Cadboro Bay"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "291",
			"FacNum": "50-291",
			"FacName": "1003 View Street",
			"FacNumName": "50-291 1003 View Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "294",
			"FacNum": "50-294",
			"FacName": "Swartz Bay Ferry Term - LT",
			"FacNumName": "50-294 Swartz Bay Ferry Term - LT"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "298",
			"FacNum": "50-298",
			"FacName": "Victoria Marriott",
			"FacNumName": "50-298 Victoria Marriott"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "606",
			"FacNum": "50-606",
			"FacName": "415 DUNEDIN",
			"FacNumName": "50-606 415 DUNEDIN"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "610",
			"FacNum": "50-610",
			"FacName": "1925 Blanshard",
			"FacNumName": "50-610 1925 Blanshard"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "612",
			"FacNum": "50-612",
			"FacName": "Sooke Pot Holes",
			"FacNumName": "50-612 Sooke Pot Holes"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "620",
			"FacNum": "50-620",
			"FacName": "424 Powell St",
			"FacNumName": "50-620 424 Powell St"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "631",
			"FacNum": "50-631",
			"FacName": "777 Royal Oak Drive",
			"FacNumName": "50-631 777 Royal Oak Drive"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "634",
			"FacNum": "50-634",
			"FacName": "1095 MCKENZIE AVE",
			"FacNumName": "50-634 1095 MCKENZIE AVE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "637",
			"FacNum": "50-637",
			"FacName": "1551 CEDAR HILL X ROAD",
			"FacNumName": "50-637 1551 CEDAR HILL X ROAD"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "644",
			"FacNum": "50-644",
			"FacName": "707 Courtney Street",
			"FacNumName": "50-644 707 Courtney Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "654",
			"FacNum": "50-654",
			"FacName": "3440 SAANICH ROAD",
			"FacNumName": "50-654 3440 SAANICH ROAD"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "655",
			"FacNum": "50-655",
			"FacName": "9741 Second Street",
			"FacNumName": "50-655 9741 Second Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "661",
			"FacNum": "50-661",
			"FacName": "17 Huron Street",
			"FacNumName": "50-661 17 Huron Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "668",
			"FacNum": "50-668",
			"FacName": "1128 Vancouver Street",
			"FacNumName": "50-668 1128 Vancouver Street"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "670",
			"FacNum": "50-670",
			"FacName": "1205 PANDORA AVENUE",
			"FacNumName": "50-670 1205 PANDORA AVENUE"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "671",
			"FacNum": "50-671",
			"FacName": "932 Pandora Avenue",
			"FacNumName": "50-671 932 Pandora Avenue"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "675",
			"FacNum": "50-675",
			"FacName": "1905-1911 Sooke",
			"FacNumName": "50-675 1905-1911 Sooke"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "684",
			"FacNum": "50-684",
			"FacName": "385WaterfrontCrescent",
			"FacNumName": "50-684 385WaterfrontCrescent"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "691",
			"FacNum": "50-691",
			"FacName": "3814 Carey Road",
			"FacNumName": "50-691 3814 Carey Road"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "695",
			"FacNum": "50-695",
			"FacName": "613 Pandora",
			"FacNumName": "50-695 613 Pandora"
		},
		{
			"FacCity": "Victoria",
			"CityNum": "50",
			"DisplayNum": "999",
			"FacNum": "50-999",
			"FacName": "MISC LOT",
			"FacNumName": "50-999 MISC LOT"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "386",
			"FacNum": "54-386",
			"FacName": "300 Comox Rd",
			"FacNumName": "54-386 300 Comox Rd"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "398",
			"FacNum": "54-398",
			"FacName": "BC FERRIES",
			"FacNumName": "54-398 BC FERRIES"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "403",
			"FacNum": "54-403",
			"FacName": "8 ESPLANADE",
			"FacNumName": "54-403 8 ESPLANADE"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "407",
			"FacNum": "54-407",
			"FacName": "North & Easthom Roads",
			"FacNumName": "54-407 North & Easthom Roads"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "408",
			"FacNum": "54-408",
			"FacName": "100 Trunk Road",
			"FacNumName": "54-408 100 Trunk Road"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "411",
			"FacNum": "54-411",
			"FacName": "65 Chapel Street",
			"FacNumName": "54-411 65 Chapel Street"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "415",
			"FacNum": "54-415",
			"FacName": "Departure Bay Ferry - LT",
			"FacNumName": "54-415 Departure Bay Ferry - LT"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "417",
			"FacNum": "54-417",
			"FacName": "Duke Point Ferry - LT",
			"FacNumName": "54-417 Duke Point Ferry - LT"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "430",
			"FacNum": "54-430",
			"FacName": "395 TERMINAL AVE",
			"FacNumName": "54-430 395 TERMINAL AVE"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "444",
			"FacNum": "54-444",
			"FacName": "650 South Terminal Avenue",
			"FacNumName": "54-444 650 South Terminal Avenue"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "446",
			"FacNum": "54-446",
			"FacName": "Howard Johnson Hotel",
			"FacNumName": "54-446 Howard Johnson Hotel"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "448",
			"FacNum": "54-448",
			"FacName": "420 SELBY STREET",
			"FacNumName": "54-448 420 SELBY STREET"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "452",
			"FacNum": "54-452",
			"FacName": "55 Comox Road",
			"FacNumName": "54-452 55 Comox Road"
		},
		{
			"FacCity": "Nanaimo",
			"CityNum": "54",
			"DisplayNum": "460",
			"FacNum": "54-460",
			"FacName": "Roberts Reach Road",
			"FacNumName": "54-460 Roberts Reach Road"
		}
	],
	"SkipLogging": false
};
const fs = require('fs');
const x = Object.keys(obj);
const y = x.map((i) => i + " \n");
console.log(y);

fs.writeFile('session-data.txt', y, (err) => {
	if(err) throw err;
});
const topics = [
  {id:"basics", n:"01", icon:"⌘", title:"أساسيات Python", en:"Python Basics", desc:"قواعد الكتابة، المتغيرات، التعليقات، الطباعة والإدخال.", color:"#f3c969", level:"مبتدئ", duration:"20 دقيقة", tags:"syntax variables print input keywords"},
  {id:"datatypes", n:"02", icon:"▦", title:"Data Types", en:"Data Types", desc:"أنواع البيانات الأساسية والمجموعات والتحويل بينها.", color:"#b8a4ff", level:"مبتدئ", duration:"35 دقيقة", tags:"int float complex str bool none list tuple dict set range bytes bytearray memoryview frozenset"},
  {id:"operators", n:"03", icon:"∑", title:"Operators", en:"Operators", desc:"العمليات الحسابية والمنطقية والمقارنة والإسناد.", color:"#68e0b2", level:"مبتدئ", duration:"20 دقيقة", tags:"arithmetic comparison logical assignment bitwise identity membership"},
  {id:"methods", n:"04", icon:"ƒ", title:"Methods & Built-ins", en:"Methods & Built-ins", desc:"أهم الدوال الجاهزة وميثودات النصوص والقوائم والقواميس.", color:"#ff9e83", level:"مبتدئ", duration:"45 دقيقة", tags:"methods functions string list dict set tuple append extend upper lower split join sort"},
  {id:"conditions", n:"05", icon:"⑂", title:"Conditions", en:"Conditions", desc:"اتخاذ القرارات باستخدام if وelif وelse وmatch.", color:"#7fc8ff", level:"مبتدئ", duration:"20 دقيقة", tags:"if elif else match case truthy falsy ternary"},
  {id:"loops", n:"06", icon:"⟳", title:"Loops", en:"Loops", desc:"تكرار الأوامر باستخدام for وwhile والتحكم في الحلقات.", color:"#f3c969", level:"مبتدئ", duration:"25 دقيقة", tags:"for while range break continue pass nested loops comprehension"},
  {id:"functions", n:"07", icon:"λ", title:"Functions", en:"Functions", desc:"كتابة الدوال، parameters، return، scope وlambda.", color:"#b8a4ff", level:"متوسط", duration:"35 دقيقة", tags:"def return parameters arguments args kwargs lambda scope global nonlocal"},
  {id:"errors", n:"08", icon:"⚠", title:"Errors & Exceptions", en:"Exceptions", desc:"فهم الأخطاء والتعامل معها باستخدام try وexcept.", color:"#ff9e83", level:"متوسط", duration:"20 دقيقة", tags:"error exception try except else finally raise valueerror typeerror"},
  {id:"oop", n:"09", icon:"◇", title:"OOP", en:"Object-Oriented Programming", desc:"Classes وObjects والوراثة والميثودات الخاصة.", color:"#68e0b2", level:"متوسط", duration:"45 دقيقة", tags:"class object self init inheritance encapsulation polymorphism abstraction property staticmethod classmethod dunder"},
  {id:"files", n:"10", icon:"▤", title:"Files & Modules", en:"Files & Modules", desc:"قراءة وكتابة الملفات وتنظيم الكود في Modules.", color:"#7fc8ff", level:"متوسط", duration:"30 دقيقة", tags:"open read write with import module package json csv pathlib"},
  {id:"advanced", n:"11", icon:"✳", title:"Advanced Python", en:"Advanced Topics", desc:"Iterators وGenerators وDecorators وType Hints.", color:"#b8a4ff", level:"متقدم", duration:"40 دقيقة", tags:"iterator iterable generator yield decorator typing async await comprehension recursion dataclass"},
  {id:"erp", n:"12", icon:"▧", title:"Python مع ERP وOdoo", en:"Python for ERP", desc:"إزاي تنقل أساسيات بايثون لتطبيقات حسابات ومخازن وOdoo.", color:"#f3c969", level:"مسار عملي", duration:"خطة تطبيق", tags:"erp odoo accounting inventory database sql postgresql orm models fields views"}
];

const lessons = {
  basics: {
    intro: "ابدأ بالقواعد اللي كل برنامج Python بيحتاجها: كتابة الأوامر، تخزين البيانات، والتعامل مع المستخدم.",
    sections: [
      { title: "المتغيرات والطباعة", body: "المتغير اسم بنستخدمه للإشارة لقيمة. Python بتحدد النوع تلقائيًا حسب القيمة.", code: 'name = "Ahmed"\nage = 24\nprint("Hello", name)\nprint(age)' },
      { title: "استقبال إدخال المستخدم", body: "input() بترجع نصًا دائمًا؛ لو محتاج رقم حوّله باستخدام int() أو float().", code: 'name = input("Your name: ")\nage = int(input("Your age: "))\nprint(f"Hello {name}, you are {age}")' },
      { title: "قواعد التسمية والتنسيق", body: "استخدم أسماء واضحة، وتجنّب الكلمات المحجوزة. استخدم 4 مسافات للمسافة البادئة واتبع snake_case.", code: 'employee_name = "Mona"\nmonthly_salary = 8500\n# This is a comment\nif monthly_salary > 5000:\n    print("Good")' },
      { title: "أهم قواعد الكتابة", table: [["القاعدة", "المثال"], ["حساسية حالة الأحرف", "name مختلف عن Name"], ["المقارنة", "== وليس ="], ["التعليق", "# comment"], ["المسافة البادئة", "4 spaces عادةً"], ["النصوص", "'text' أو \"text\""]] }
    ]
  },
  datatypes: {
    intro: "نوع البيانات بيحدد طبيعة القيمة والعمليات المناسبة عليها. استخدم type() لمعرفة النوع وisinstance() لاختباره.",
    sections: [
      { title: "الأنواع الأساسية", table: [["النوع", "المثال", "المعنى"], ["int", "age = 24", "عدد صحيح"], ["float", "price = 19.5", "عدد عشري"], ["complex", "z = 2 + 3j", "عدد مركب"], ["str", "name = 'Ali'", "نص"], ["bool", "active = True", "صح أو غلط"], ["NoneType", "result = None", "عدم وجود قيمة"]] },
      { title: "أنواع المجموعات", table: [["النوع", "المثال", "الخصائص"], ["list", "[1, 2, 3]", "مرتبة وقابلة للتعديل وتسمح بالتكرار"], ["tuple", "(1, 2, 3)", "مرتبة وغير قابلة للتعديل"], ["dict", "{'name': 'Ali'}", "مفاتيح وقيم"], ["set", "{1, 2, 3}", "عناصر فريدة بلا ترتيب مضمون"], ["range", "range(5)", "تسلسل أعداد"], ["frozenset", "frozenset({1,2})", "Set غير قابلة للتعديل"]] },
      { title: "الأنواع الثنائية", table: [["النوع", "الاستخدام"], ["bytes", "بيانات ثنائية غير قابلة للتعديل"], ["bytearray", "بيانات ثنائية قابلة للتعديل"], ["memoryview", "عرض بيانات ثنائية دون نسخها بالضرورة"]] },
      { title: "Mutable وImmutable", body: "Mutable يعني تقدر تعدّل محتوى الكائن نفسه مثل list وdict وset. Immutable يعني لا تغيّر الكائن نفسه مثل int وstr وtuple وbytes.", code: 'items = [1, 2]\nitems.append(3)  # تعديل القائمة\n\nname = "Ali"\nname = name + " Ahmed"  # نص جديد' },
      { title: "التحويل بين الأنواع", table: [["الدالة", "مثال"], ["int()", "int('25')"], ["float()", "float('2.5')"], ["str()", "str(100)"], ["bool()", "bool(1)"], ["list()", "list('abc')"], ["tuple()", "tuple([1, 2])"], ["set()", "set([1, 1, 2])"], ["dict()", "dict(a=1, b=2)"], ["complex()", "complex(2, 3)"]], note: "int('hello') يسبب ValueError. وinput() ترجع str، لذلك حوّل المدخل لو محتاج رقمًا." }
    ]
  },
  operators: {
    intro: "الـ Operators بتنفذ عمليات على القيم، من الحسابات لحد المقارنات والمنطق.",
    sections: [
      { title: "العمليات الحسابية", table: [["العامل", "المعنى", "مثال"], ["+", "جمع", "5 + 2 = 7"], ["-", "طرح", "5 - 2 = 3"], ["*", "ضرب", "5 * 2 = 10"], ["/", "قسمة عادية", "5 / 2 = 2.5"], ["//", "قسمة أرضية", "5 // 2 = 2"], ["%", "باقي القسمة", "5 % 2 = 1"], ["**", "أس", "2 ** 3 = 8"]] },
      { title: "المقارنة والمنطق", table: [["النوع", "العوامل"], ["مقارنة", "== != > < >= <="], ["منطق", "and, or, not"], ["العضوية", "in, not in"], ["الهوية", "is, is not"], ["بتّية", "&, |, ^, ~, <<, >>"]] },
      { title: "الإسناد المختصر", body: "تقدر تحدّث المتغير مباشرة باستخدام += و-= و*= و/= و//= و%= و**=.", code: 'total = 100\ntotal += 25\ntotal -= 10\nprint(total)  # 115' },
      { title: "الفرق بين == و is", body: "== تقارن القيم، أما is فتختبر هل الاسمان يشيران لنفس الكائن. استخدم is None عند فحص None.", code: 'a = [1, 2]\nb = [1, 2]\nprint(a == b)  # True\nprint(a is b)  # False' }
    ]
  },
  methods: {
    intro: "الـ Function بنستدعيها باسمها مثل len(text)، أما الـ Method فغالبًا مرتبطة بكائن مثل text.upper().",
    sections: [
      { title: "Built-in Functions مهمة", table: [["الدالة", "الاستخدام"], ["print() / input()", "طباعة واستقبال مدخلات"], ["type() / isinstance()", "فحص النوع"], ["len()", "عدد العناصر"], ["sum() / min() / max()", "حسابات على مجموعات"], ["sorted() / reversed()", "ترتيب أو عكس التسلسل"], ["enumerate() / zip()", "التكرار مع فهرس أو دمج مجموعات"], ["range()", "تسلسل أعداد"], ["abs() / round() / pow()", "عمليات حسابية"], ["any() / all()", "اختبار العناصر"], ["open()", "التعامل مع الملفات"], ["getattr() / setattr()", "الوصول لخصائص بالاسم"]] },
      { title: "String Methods", table: [["الميثود", "الاستخدام"], ["upper() / lower()", "حروف كبيرة أو صغيرة"], ["capitalize() / title()", "تغيير حالة الحروف"], ["strip() / lstrip() / rstrip()", "إزالة أحرف من الأطراف"], ["find() / rfind()", "البحث عن موضع"], ["index() / rindex()", "البحث مع خطأ لو غير موجود"], ["count()", "عدّ مرات الظهور"], ["startswith() / endswith()", "اختبار البداية أو النهاية"], ["split() / rsplit() / splitlines()", "تقسيم النص"], ["join()", "دمج نصوص"], ["replace()", "استبدال"], ["partition() / rpartition()", "تقسيم حول فاصل"], ["removeprefix() / removesuffix()", "إزالة بادئة أو لاحقة"], ["isalpha() / isalnum()", "اختبار الحروف والأرقام"], ["isdigit() / isdecimal() / isnumeric()", "اختبار القيم الرقمية"], ["islower() / isupper() / istitle()", "اختبار حالة الحروف"], ["isspace() / isascii()", "اختبار المسافات أو ASCII"], ["center() / ljust() / rjust()", "محاذاة النص"], ["zfill() / expandtabs()", "أصفار بادئة أو معالجة Tab"], ["format() / format_map()", "تنسيق النص"], ["encode() / casefold()", "ترميز ومقارنة نصية"], ["maketrans() / translate()", "تحويل الأحرف"]] },
      { title: "List Methods", table: [["الميثود", "الاستخدام"], ["append(x)", "إضافة عنصر في النهاية"], ["extend(iterable)", "إضافة عدة عناصر"], ["insert(i, x)", "إضافة بمكان محدد"], ["remove(x)", "حذف أول قيمة مطابقة"], ["pop(i)", "حذف وإرجاع عنصر"], ["clear()", "تفريغ القائمة"], ["index(x) / count(x)", "موضع العنصر وعدد تكراره"], ["sort() / reverse()", "ترتيب أو عكس القائمة نفسها"], ["copy()", "نسخة سطحية"]], code: 'a = [1, 2]\na.append([3, 4])\nprint(a)  # [1, 2, [3, 4]]\n\nb = [1, 2]\nb.extend([3, 4])\nprint(b)  # [1, 2, 3, 4]', note: "sort() تعدّل القائمة نفسها وترجع None؛ استخدم sorted(list) لو محتاج قائمة مرتبة جديدة." },
      { title: "Tuple Methods", table: [["الميثود", "الاستخدام"], ["count(x)", "عدد مرات ظهور العنصر"], ["index(x)", "موضع أول ظهور"]] },
      { title: "Dictionary Methods", table: [["الميثود", "الاستخدام"], ["get(key, default)", "قراءة آمنة للقيمة"], ["keys() / values() / items()", "المفاتيح والقيم والأزواج"], ["update()", "تحديث القاموس"], ["pop(key) / popitem()", "حذف وإرجاع عنصر"], ["clear() / copy()", "تفريغ أو نسخة سطحية"], ["setdefault()", "إرجاع القيمة أو إنشاء مفتاح افتراضي"], ["fromkeys()", "إنشاء قاموس من مفاتيح"]], code: 'employee = {"name": "Ali", "salary": 8000}\nprint(employee.get("age", 24))\nemployee.update({"salary": 9000})\nfor key, value in employee.items():\n    print(key, value)' },
      { title: "Set Methods", table: [["الميثود", "الاستخدام"], ["add() / update()", "إضافة عنصر أو عناصر"], ["remove() / discard()", "حذف عنصر؛ discard لا يخطئ لو غير موجود"], ["pop() / clear() / copy()", "حذف عنصر أو تفريغ أو نسخ"], ["union()", "اتحاد مجموعتين"], ["intersection()", "العناصر المشتركة"], ["difference()", "عناصر الأولى غير الموجودة في الثانية"], ["symmetric_difference()", "العناصر غير المشتركة"], ["*_update()", "تحديث المجموعة نفسها بنتيجة العملية"], ["issubset() / issuperset()", "اختبار الاحتواء"], ["isdisjoint()", "هل لا توجد عناصر مشتركة؟"]], code: 'a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a.union(b))\nprint(a.intersection(b))\nprint(a.difference(b))' },
      { title: "مساعدة سريعة", body: "تقدر تعرف الميثودز المتاحة على أي كائن باستخدام dir()، وتقرأ شرحها باستخدام help() داخل بيئة Python.", code: 'text = "hello"\nprint(dir(text))\nhelp(str.replace)' }
    ]
  },
  conditions: {
    intro: "الشروط بتخلي البرنامج ينفذ مسارات مختلفة حسب البيانات.",
    sections: [
      { title: "if / elif / else", code: 'salary = 9000\nif salary >= 10000:\n    print("High")\nelif salary >= 7000:\n    print("Medium")\nelse:\n    print("Low")' },
      { title: "Truthy وFalsy", body: "القيم الفارغة والصفر وFalse وNone تعتبر Falsy. معظم القيم الأخرى تعتبر Truthy.", code: 'name = ""\nif name:\n    print("Name exists")\nelse:\n    print("Name is empty")' },
      { title: "Ternary Expression", code: 'age = 20\nstatus = "Adult" if age >= 18 else "Minor"' },
      { title: "match / case", body: "متاح من Python 3.10، وبيساعدك تتعامل مع حالات مختلفة بشكل واضح.", code: 'command = "add"\nmatch command:\n    case "add":\n        print("Adding")\n    case "delete":\n        print("Deleting")\n    case _:\n        print("Unknown")' }
    ]
  },
  loops: {
    intro: "الحلقات بتكرر تنفيذ الكود. استخدم for لما تتعامل مع عناصر أو نطاق، وwhile لما التكرار مرتبط بشرط.",
    sections: [
      { title: "for وrange()", code: 'for number in range(1, 6):\n    print(number)\n\nfor number in range(2, 11, 2):\n    print(number)' },
      { title: "while", code: 'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1' },
      { title: "break وcontinue وelse", code: 'for number in range(1, 6):\n    if number == 3:\n        continue\n    print(number)\nelse:\n    print("Loop finished")', note: "else في الحلقة بتنّفذ لو الحلقة انتهت طبيعيًا من غير break." },
      { title: "List Comprehension", code: 'squares = [n ** 2 for n in range(1, 6)]\nevens = [n for n in range(1, 11) if n % 2 == 0]\nprint(squares)\nprint(evens)' }
    ]
  },
  functions: {
    intro: "الدالة بتجمع منطقًا له اسم، وتقدر تستدعيه أكتر من مرة وتعيد استخدامه.",
    sections: [
      { title: "تعريف الدالة وreturn", code: 'def add(a, b):\n    return a + b\n\nresult = add(10, 20)\nprint(result)  # 30', note: "print() تعرض النتيجة، أما return فترجع قيمة يمكن استخدامها في بقية البرنامج." },
      { title: "أنواع Parameters", table: [["النوع", "مثال"], ["Positional / keyword", "def add(a, b):"], ["Default", "def greet(name='Guest'):"], ["*args", "def total(*numbers):"], ["**kwargs", "def show(**details):"], ["Positional-only", "def f(a, /):"], ["Keyword-only", "def f(*, name):"]], code: 'def show_data(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\nshow_data(10, 20, name="Ali", age=24)' },
      { title: "Lambda وScope", code: 'square = lambda x: x ** 2\nprint(square(5))\n\ntax_rate = 0.14\ndef calculate_tax(price):\n    tax = price * tax_rate\n    return tax', body: "المتغير المحلي Local داخل الدالة، والعام Global على مستوى الملف. فيه كمان Enclosing وBuilt-in scopes." },
      { title: "تجنب Mutable Default Arguments", code: 'def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items', note: "القائمة الافتراضية القابلة للتعديل قد تتشارك بين استدعاءات الدالة؛ استخدم None وأنشئ القائمة داخلها." }
    ]
  },
  errors: {
    intro: "الأخطاء بتحصل أثناء التطوير. اقرأ Traceback وحدد نوع الخطأ، ثم عالج الحالات المتوقعة فقط.",
    sections: [
      { title: "أخطاء شائعة", table: [["الخطأ", "السبب المعتاد"], ["SyntaxError", "تركيب كود غير صحيح"], ["IndentationError", "مسافات بادئة غير صحيحة"], ["NameError", "اسم غير معرّف"], ["TypeError", "عملية غير مناسبة للنوع"], ["ValueError", "قيمة غير صالحة للتحويل"], ["IndexError", "فهرس غير موجود"], ["KeyError", "مفتاح غير موجود"], ["AttributeError", "خاصية أو ميثود غير موجودة"], ["ZeroDivisionError", "القسمة على صفر"], ["FileNotFoundError", "ملف غير موجود"]] },
      { title: "try / except / else / finally", code: 'try:\n    age = int(input("Enter age: "))\nexcept ValueError:\n    print("Enter a valid integer")\nelse:\n    print("Your age is", age)\nfinally:\n    print("Finished")' },
      { title: "raise وCustom Exceptions", code: 'class InsufficientStockError(Exception):\n    pass\n\ndef issue_stock(available, quantity):\n    if quantity > available:\n        raise InsufficientStockError("Not enough stock")\n    return available - quantity', note: "تجنب except: العام قدر الإمكان. لا تبتلع الأخطاء بصمت، ولا تستخدم eval() على مدخلات غير موثوقة." }
    ]
  },
  oop: {
    intro: "البرمجة الكائنية بتنظم البيانات والسلوك في Classes وObjects، ودي مهمة لفهم تصميم أنظمة الأعمال وOdoo.",
    sections: [
      { title: "Class وObject", code: 'class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def display(self):\n        print(self.name, self.price)\n\nproduct = Product("Rice", 50)\nproduct.display()', note: "__init__ تهيّئ الكائن بعد إنشائه، وself بتمثل الكائن الحالي في الميثود العادية." },
      { title: "أنواع Methods", table: [["النوع", "التعريف", "المعنى"], ["Instance Method", "def method(self):", "تتعامل مع الكائن"], ["Class Method", "@classmethod ثم def method(cls):", "تتعامل مع الكلاس"], ["Static Method", "@staticmethod", "لا تحتاج self أو cls تلقائيًا"], ["Property", "@property", "تسمح بالوصول لسلوك كأنه خاصية"]], code: 'class Product:\n    tax_rate = 0.14\n    def __init__(self, price):\n        self.price = price\n    def final_price(self):\n        return self.price * (1 + self.tax_rate)\n    @classmethod\n    def set_tax(cls, rate):\n        cls.tax_rate = rate\n    @staticmethod\n    def valid_price(price):\n        return price >= 0' },
      { title: "المفاهيم الرئيسية", table: [["المفهوم", "المعنى"], ["Encapsulation", "تنظيم الوصول للبيانات"], ["Inheritance", "وراثة كلاس من آخر"], ["Polymorphism", "واجهة مشتركة وسلوك مختلف"], ["Abstraction", "إظهار المهم وإخفاء التفاصيل"], ["Composition", "كائن يحتوي أو يستخدم كائنات أخرى"]] },
      { title: "Dunder Methods", body: "ميثودات خاصة بتبدأ وتنتهي بشرطتين سفليتين، وبتحدد سلوك الكائن مع Python.", table: [["الميثود", "السلوك"], ["__init__()", "تهيئة الكائن"], ["__str__() / __repr__()", "تمثيل الكائن"], ["__len__()", "len()"], ["__eq__()", "=="], ["__add__()", "+"], ["__iter__() / __next__()", "التكرار"], ["__getitem__() / __setitem__()", "الوصول للعناصر وتعديلها"], ["__enter__() / __exit__()", "إدارة السياق مع with"], ["__call__()", "استدعاء الكائن كدالة"]] }
    ]
  },
  files: {
    intro: "الملفات بتسمحلك تحفظ بيانات البرنامج أو تقرأ تقارير ومعلومات خارجية.",
    sections: [
      { title: "قراءة وكتابة ملف", code: 'with open("report.txt", "w", encoding="utf-8") as file:\n    file.write("Monthly sales report")\n\nwith open("report.txt", "r", encoding="utf-8") as file:\n    content = file.read()\n    print(content)' },
      { title: "أوضاع فتح الملفات", table: [["الوضع", "المعنى"], ["r", "قراءة ملف موجود"], ["w", "كتابة واستبدال المحتوى"], ["a", "إضافة في نهاية الملف"], ["x", "إنشاء ملف جديد بشرط ألا يكون موجودًا"], ["b", "وضع ثنائي مثل rb"], ["t", "وضع نصي وهو الافتراضي"], ["+", "قراءة وكتابة معًا"]] },
      { title: "File Methods", table: [["الميثود", "الاستخدام"], ["read()", "قراءة المحتوى"], ["readline()", "قراءة سطر"], ["readlines()", "قراءة الأسطر في قائمة"], ["write() / writelines()", "كتابة نص أو أسطر"], ["seek() / tell()", "تحريك المؤشر ومعرفة موضعه"], ["flush()", "تمرير البيانات المكتوبة مؤقتًا"], ["close()", "إغلاق الملف"]], note: "استخدام with هو الأفضل غالبًا لأنه يغلق الملف تلقائيًا عند الخروج من الكتلة." },
      { title: "Modules وPackages", code: '# calculations.py\ndef add(a, b):\n    return a + b\n\n# main.py\nfrom calculations import add\nprint(add(10, 20))', body: "Module هو ملف Python، وPackage طريقة لتنظيم الموديولات. مكتبات مفيدة: math وdatetime وjson وcsv وpathlib وsqlite3 وcollections وlogging وunittest." }
    ]
  },
  advanced: {
    intro: "الموضوعات دي بتساعدك تكتب برامج أنضف وأكثر قابلية للتوسّع بعد ما تتمكن من الأساسيات والدوال وOOP.",
    sections: [
      { title: "Iterators وGenerators", code: 'numbers = iter([10, 20, 30])\nprint(next(numbers))\n\ndef count_up_to(n):\n    for i in range(1, n + 1):\n        yield i\n\nprint(list(count_up_to(3)))' },
      { title: "Decorators", code: 'def announce(func):\n    def wrapper(*args, **kwargs):\n        print("Starting")\n        return func(*args, **kwargs)\n    return wrapper\n\n@announce\ndef greet():\n    print("Hello")\n\ngreet()' },
      { title: "Type Hints وDataclasses", code: 'def calculate_total(price: float, quantity: int) -> float:\n    return price * quantity\n\nfrom dataclasses import dataclass\n\n@dataclass\nclass Item:\n    name: str\n    quantity: int' },
      { title: "قائمة مواضيع متقدمة", table: [["الموضوع", "الفكرة"], ["Context Managers", "إدارة الملفات والموارد"], ["Regular Expressions", "البحث باستخدام الأنماط"], ["Async / Await", "عمليات إدخال وإخراج غير متزامنة"], ["Recursion", "دالة تستدعي نفسها"], ["Closures", "دوال تحتفظ بمتغيرات النطاق الخارجي"], ["Virtual Environments", "عزل مكتبات كل مشروع"], ["Testing & Logging", "اختبار البرنامج وتتبع الأخطاء"], ["Profiling", "قياس الأداء"], ["Concurrency", "تنظيم مهام متعددة"]] }
    ]
  },
  erp: {
    intro: "بما إن هدفك ERP وOdoo، ركّز على أساسيات Python ثم طبّقها على المحاسبة والمخازن وقواعد البيانات.",
    sections: [
      { title: "المسار المقترح", table: [["المرحلة", "تتعلم إيه"], ["1", "Syntax وVariables وData Types وOperators"], ["2", "Conditions وLoops وMethods"], ["3", "Functions وScope وModules"], ["4", "Collections وExceptions وFiles"], ["5", "OOP وType Hints وTesting"], ["6", "SQL وPostgreSQL ومبادئ قواعد البيانات"], ["7", "Odoo Models وFields وORM وRelations"], ["8", "Views وActions وSecurity وبناء Module"]] },
      { title: "مشروع تدريبي: فاتورة بسيطة", body: "ابدأ ببرنامج يحسب إجمالي الفاتورة والخصم والضريبة، ثم أضف المنتجات والمخزون والعملاء، وبعدها خزّن البيانات في قاعدة بيانات.", code: 'from decimal import Decimal\n\nprice = Decimal("100.00")\nquantity = 3\ntax_rate = Decimal("0.14")\nsubtotal = price * quantity\ntax = subtotal * tax_rate\ntotal = subtotal + tax\nprint(f"Subtotal: {subtotal}")\nprint(f"Tax: {tax}")\nprint(f"Total: {total}")', note: "في الحسابات المالية استخدم Decimal عند الحاجة للدقة العشرية، وتعلّم قواعد التقريب والعملات المناسبة لنظامك." },
      { title: "روابط رسمية", links: [["Python Tutorial", "https://docs.python.org/3/tutorial/"], ["Built-in Functions", "https://docs.python.org/3/library/functions.html"], ["Built-in Types", "https://docs.python.org/3/library/stdtypes.html"], ["Python Standard Library", "https://docs.python.org/3/library/"], ["Odoo Documentation", "https://www.odoo.com/documentation/"]] }
    ]
  }
};

const navList = document.getElementById("navList");
const contentGrid = document.getElementById("contentGrid");
const lessonView = document.getElementById("lessonView");
const lessonContent = document.getElementById("lessonContent");
const welcomeRow = document.getElementById("welcomeRow");
const hero = document.getElementById("hero");
const searchSection = document.querySelector(".search-section");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const noResults = document.getElementById("noResults");
const toast = document.getElementById("toast");
let activeTopic = null;
let completed = new Set(JSON.parse(localStorage.getItem("pythonMasterCompleted") || "[]"));
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function updateProgress() {
  const count = completed.size;
  const percent = Math.round((count / topics.length) * 100);
  document.getElementById("progressText").textContent = percent + "%";
  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("doneCount").textContent = count;
  document.getElementById("topicCount").textContent = topics.length;
  localStorage.setItem("pythonMasterCompleted", JSON.stringify([...completed]));
  renderNav();
}

function renderNav() {
  navList.innerHTML = topics.map(t => `
    <button class="nav-item ${activeTopic === t.id ? "active" : ""}" data-topic="${t.id}">
      <span class="nav-number">${t.n}</span><span>${t.title}</span>
      ${completed.has(t.id) ? '<span class="nav-check">✓</span>' : ""}
    </button>`).join("");
  navList.querySelectorAll("[data-topic]").forEach(btn => {
    btn.addEventListener("click", () => openTopic(btn.dataset.topic));
  });
}

function cardTemplate(t) {
  return `<button class="topic-card ${completed.has(t.id) ? "completed" : ""}" data-topic="${t.id}" style="--card-accent:${t.color}">
    <div class="topic-card-top"><span class="topic-icon">${t.icon}</span><span class="topic-index">${t.n} / 12</span></div>
    <h3>${t.title} <span style="color:#71809f;font:10px 'Fira Code',monospace">${t.en}</span></h3>
    <p>${t.desc}</p>
    <div class="topic-footer"><span>${t.level} · ${t.duration}</span><span class="topic-arrow">${completed.has(t.id) ? "✓" : "←"}</span></div>
  </button>`;
}

function renderCards(filter = "") {
  const q = filter.trim().toLowerCase();
  const filtered = topics.filter(t => {
    const lessonText = JSON.stringify(lessons[t.id] || "").toLowerCase();
    return !q || [t.title, t.en, t.desc, t.tags, t.id].join(" ").toLowerCase().includes(q) || lessonText.includes(q);
  });
  contentGrid.innerHTML = filtered.map(cardTemplate).join("");
  contentGrid.querySelectorAll("[data-topic]").forEach(btn => {
    btn.addEventListener("click", () => openTopic(btn.dataset.topic));
  });
  const empty = filtered.length === 0;
  noResults.classList.toggle("hidden", !empty);
  contentGrid.classList.toggle("hidden", empty);
  document.getElementById("searchHint").classList.toggle("hidden", q.length > 0);
  document.getElementById("clearSearch").style.display = q ? "block" : "none";
}

function esc(s) {
  return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function codeBlock(code) {
  const safe = esc(code);
  return `<div class="code-wrap"><div class="code-toolbar"><span>PYTHON</span><button class="copy-code" data-copy="${encodeURIComponent(code)}">نسخ الكود ⧉</button></div><pre><code>${safe}</code></pre></div>`;
}

function sectionTemplate(s, i) {
  let out = `<section class="lesson-section"><h2>${i + 1}. ${s.title}</h2>`;
  if (s.body) out += `<p>${s.body}</p>`;
  if (s.code) out += codeBlock(s.code);
  if (s.table) {
    out += `<div class="table-scroll"><table class="reference-table"><thead><tr>${s.table[0].map(x => `<th>${esc(x)}</th>`).join("")}</tr></thead><tbody>${s.table.slice(1).map(row => `<tr>${row.map((cell, j) => `<td>${j === 0 && (cell.includes("()") || cell.includes("int") || cell.includes("str") || cell.includes("list") || cell.includes("dict")) ? `<code class="inline-code">${esc(cell)}</code>` : esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  if (s.links) {
    out += `<ul>${s.links.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener" style="color:var(--accent)">${esc(label)} ↗</a></li>`).join("")}</ul>`;
  }
  if (s.note) out += `<div class="lesson-note"><b>خلي بالك:</b> ${s.note}</div>`;
  out += "</section>";
  return out;
}

function openTopic(id) {
  const t = topics.find(x => x.id === id);
  if (!t) return;
  activeTopic = id;
  const lesson = lessons[id];
  document.getElementById("crumbTitle").textContent = t.title;
  hero.classList.add("hidden");
  searchSection.classList.add("hidden");
  welcomeRow.classList.add("hidden");
  contentGrid.classList.add("hidden");
  noResults.classList.add("hidden");
  lessonView.classList.remove("hidden");
  lessonContent.innerHTML = `<div class="lesson-header"><div class="lesson-label">${t.en.toUpperCase()} · ${t.n}</div><h1>${t.title}</h1><p>${lesson.intro}</p></div>${lesson.sections.map(sectionTemplate).join("")}`;
  const completeBtn = document.getElementById("completeLesson");
  completeBtn.classList.toggle("done", completed.has(id));
  completeBtn.textContent = completed.has(id) ? "✓ الباب مكتمل" : "○ علّم الباب كمكتمل";
  renderNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileMenu();
}

function showHome() {
  activeTopic = null;
  document.getElementById("crumbTitle").textContent = "البداية";
  hero.classList.remove("hidden");
  searchSection.classList.remove("hidden");
  welcomeRow.classList.remove("hidden");
  lessonView.classList.add("hidden");
  renderCards(searchInput.value);
  renderNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("mobileOverlay").classList.remove("show");
}

document.getElementById("startLearning").addEventListener("click", () => openTopic("basics"));
document.getElementById("backHome").addEventListener("click", showHome);
document.getElementById("completeLesson").addEventListener("click", () => {
  if (!activeTopic) return;
  if (completed.has(activeTopic)) completed.delete(activeTopic);
  else completed.add(activeTopic);
  updateProgress();
  const btn = document.getElementById("completeLesson");
  btn.classList.toggle("done", completed.has(activeTopic));
  btn.textContent = completed.has(activeTopic) ? "✓ الباب مكتمل" : "○ علّم الباب كمكتمل";
  renderCards(searchInput.value);
  showToast(completed.has(activeTopic) ? "عاش! الباب اتعلّم كمكتمل 🎉" : "تم إلغاء علامة الاكتمال");
});

document.getElementById("resetProgress").addEventListener("click", () => {
  if (confirm("متأكد إنك عايز تمسح تقدم المذاكرة؟")) {
    completed.clear();
    updateProgress();
    renderCards(searchInput.value);
    showToast("تمت إعادة ضبط التقدم");
  }
});

searchInput.addEventListener("input", () => renderCards(searchInput.value));
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderCards("");
  searchInput.focus();
});

document.querySelectorAll("[data-search]").forEach(btn => {
  btn.addEventListener("click", () => {
    searchInput.value = btn.dataset.search;
    renderCards(searchInput.value);
    searchInput.focus();
  });
});

document.addEventListener("click", async e => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;
  const text = decodeURIComponent(btn.dataset.copy);
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "اتنسخ ✓";
    showToast("الكود اتنسخ بنجاح");
    setTimeout(() => { if (btn.isConnected) btn.textContent = "نسخ الكود ⧉"; }, 1800);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    btn.textContent = "اتنسخ ✓";
    showToast("الكود اتنسخ");
    setTimeout(() => { if (btn.isConnected) btn.textContent = "نسخ الكود ⧉"; }, 1800);
  }
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("pythonMasterTheme", document.body.classList.contains("light") ? "light" : "dark");
});

if (localStorage.getItem("pythonMasterTheme") === "light") {
  document.body.classList.add("light");
}

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("mobileOverlay").classList.add("show");
});

document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);

document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === "Escape") closeMobileMenu();
});

renderNav();
renderCards();
updateProgress();
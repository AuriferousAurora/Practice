hilarious = False
joke_evaluation = "Is not this joke funny?{}"
print(joke_evaluation.format(hilarious))

formatter = "{} {} {} {}"
add_a_curly = " {}"

print((formatter + add_a_curly).format('one', 'two', 'three', 'four', 'five'))

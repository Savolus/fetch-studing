# Fetch 🖱

## Usage ⌨️

Run test:
```
npm run start
```

Input following data: 
```
Input what data you need: post | comment | album | photo | todo | user | [support postfix 's']
Input id of data: (number)
```

## Example 🖥

Input following data to fetch it by this path. \
Let's fetch `user` with user id `3`:
```
Input what data you need: user
Input id of user: 3
```

Output of following input will be:
```json
Fetch todo started...
Data:
{
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
      "lat": "-68.6102",
      "lng": "-47.0653"
    }
  },
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
  }
}
Fetch todo ended!
```

## Bugs 🐛

If You found some kind of bugs then just tell it in the [issues](https://github.com/Savolus/fetch-studing/issues)

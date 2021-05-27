-- EXERCICE 1 --
USE northwind;
SELECT CompanyName AS "Société", ContactName AS "contact", ContactTitle AS "Fonction", Phone AS "Téléphone" 
FROM customers
WHERE Country = "France" ;

-- EXERCICE 2 --
USE northwind;
SELECT ProductName AS "Produit", UnitPrice AS "Prix" FROM products
WHERE SupplierID = "1" ;

-- EXERCICE 3 --
USE northwind;
SELECT CompanyName AS "Fournisseur" , COUNT(ProductID) AS "Nbre produits" 
FROM products,suppliers
WHERE Country="France" AND products.SupplierID = suppliers.SupplierID
GROUP BY CompanyName 
ORDER BY COUNT(ProductID) DESC;

-- EXERCICE 4 --
USE northwind;
SELECT CompanyName AS "Client" , COUNT(OrderID) AS "Nbre produits" 
FROM customers,orders
WHERE Country="France" AND customers.CustomerID = orders.CustomerID
GROUP BY CompanyName 
HAVING COUNT(OrderID) > 10
ORDER BY COUNT(OrderID) DESC;

-- EXERCICE 5 --
USE northwind;
SELECT CompanyName AS "Client", SUM(UnitPrice * Quantity) AS "ChA", Country AS "Pays"
FROM Customers, Orders, `order details`
WHERE orders.CustomerID = customers.CustomerID
AND `order details`.OrderID = orders.OrderID
GROUP BY CompanyName, Country
HAVING ChA > 30000
ORDER BY ChA DESC;

-- EXERCICE 6 (UTILISATION DE JOIN) --
USE northwind;
SELECT customers.Country AS Pays
FROM Customers
JOIN orders ON orders.CustomerID = customers.CustomerID
JOIN `order details` ON `order details`.orderID = orders.OrderID
JOIN products ON `order details`.productID = products.ProductID
JOIN suppliers ON products.SupplierID = suppliers.SupplierID
WHERE suppliers.CompanyName LIKE 'Exotic Liquids'
GROUP BY Pays

-- EXERCICE 7 --
USE northwind;
SELECT SUM(UnitPrice * Quantity) AS "Montant Ventes 97"
FROM `order details`,orders
WHERE `order details`.OrderID = orders.OrderID
AND YEAR(OrderDate) = '1997';

-- EXERCICE 8 --
USE northwind;
SELECT Month(OrderDate), SUM(UnitPrice * Quantity) AS "Montant Ventes 97"
FROM `order details`,orders
WHERE `order details`.OrderID = orders.OrderID
AND YEAR(OrderDate) = '1997'
GROUP BY Month(OrderDate);

-- EXERCICE 9 --
USE northwind;
SELECT MAX(OrderDate) AS "Date de la dernière commande"
FROM customers, orders
WHERE CompanyName = "Du monde entier"
AND customers.CustomerID = orders.CustomerID;


-- EXERCICE 10 --    
USE northwind;
SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS "Délai moyen de livraison en jours"
FROM orders;